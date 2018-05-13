function parseData(data) {
	var calData = {};
	var q = 0;
	for (x in data.data) {
		var s = data.data[x].created_at;
		if (!calData[s.substring(0,s.indexOf('T'))])
			calData[s.substring(0,s.indexOf('T'))] = 1;
		else
			calData[s.substring(0,s.indexOf('T'))] += 1;

		if (q < 4 && data.data[x].payload.commits) {
			var title = data.data[x].repo.name;
			var link = data.data[x].repo.url.replace("api.","");
			var desc = data.data[x].payload.commits[0].message;

			console.log(title + " " + desc)
			var elm = document.createElement("div");
			elm.classList.add("commit");
			var head = document.createElement("h2");
			head.innerHTML = title;
			elm.append(head)
			var bod = document.createElement("p");
			bod.innerHTML = desc;
			elm.append(bod)
			$(elm).click(function(){
				window.location.href = link;
			});
			$(elm).mouseenter(function(){
				this.style.backgroundColor = "#FFFFFF";
			}).mouseleave(function(){
				this.style.backgroundColor = "#96969F";
			});

			$(".container.commits")[0].append(elm);
			q++;
			console.log(data.data[x])
		}
	}
	console.log(calData);
	var tempCells = $(".container-fluid.activity td").not(".day");
	var cells = [];
	var q = 0;
	var r = 0;
	while (((10*r)+q) < tempCells.length) {
		cells.push(tempCells[(10*r)+q]);
		if (r == 6) {
			r = 0;
			q++;
		}
		else {
			r++;
		}
	}
	var date = new Date();
	var l = date.getDay();
	console.log(l);
	for (var i = cells.length-(7+(7-l)); i >= 0; i--) {
		cells[i].id = date;
		if (calData[date.toISOString().substring(0,s.indexOf('T'))]) {
			var n = calData[date.toISOString().substring(0,s.indexOf('T'))];
			cells[i].style.backgroundColor = "rgba("+Math.round(254 - 105*(n/5.0)).toString() +","+ Math.round(160 -67*(n/5.0)).toString() +","+ Math.round(119 -49*(n/5.0)).toString() +",1)";
		}
		date.setDate(date.getDate()-1);
	}
}
$(document).ready(function(){

	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

	function preventDefault(e) {
	  e = e || window.event;
	  if (e.preventDefault)
	      e.preventDefault();
	  e.returnValue = false;  
	}

	function preventDefaultForScrollKeys(e) {
	    if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	    }
	}

	function disableScroll() {
	  if (window.addEventListener) // older FF
	      window.addEventListener('DOMMouseScroll', preventDefault, false);
	  window.onwheel = preventDefault; // modern standard
	  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	  window.ontouchmove  = preventDefault; // mobile
	  document.onkeydown  = preventDefaultForScrollKeys;
	}

	function enableScroll() {
	    if (window.removeEventListener)
	        window.removeEventListener('DOMMouseScroll', preventDefault, false);
	    window.onmousewheel = document.onmousewheel = null; 
	    window.onwheel = null; 
	    window.ontouchmove = null;  
	    document.onkeydown = null;  
	}

	function repositionHero() {
		$("#mainPhoto")[0].style.top = (($("#mainPhoto").height() - $("#mainPhoto").parent().height())/-2).toString() + "px";
	}

	function truncateTopics() {
		
		if ($(document).width() < 800) {
			$(".row.topic").children().each(function(i,v) {
				if (Array.from(v.parentNode.children).indexOf(v) > 1) {
					$(v).hide();
				}
				else {
					$(v).show();
				}
				if (v.className === "maskedImage") {
					v.style.width = (($(v.parentNode).width()) * 0.80).toString() + "px";
				}
			});
		}
		else if ($(document).width() < 1250) {
			$(".row.topic").children().each(function(i,v) {
				if (Array.from(v.parentNode.children).indexOf(v) > 2) {
					$(v).hide();
				}
				else {
					$(v).show();
				}
				if (v.className === "maskedImage") {
					v.style.width = (($(v.parentNode).width()) * 0.40).toString() + "px";
				}
			});
		}
		else {
			$(".row.topic").children().each(function(i,v) {
				$(v).show();
				if (v.className === "maskedImage") {
					v.style.width = (($(v.parentNode).width()) * 0.3).toString() + "px";
				}
			});
		}
	}

	

	function loadGithubData() {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://api.github.com/users/broha22/events?callback=parseData";
		document.body.append(script);
	}

  	loadGithubData();
	truncateTopics();
	repositionHero();

	$(window).resize(function(){
		repositionHero();
		truncateTopics();
	});

	// $("svg").each(function(){
 //  		this.width = this.parentNode.width;
 //  		this.height = this.parentNode.height;
	// });

	var observer = new MutationObserver(function(mutations) {
    	mutations.forEach(function(mutation) {
        	console.log(mutation)
        	if (mutation.addedNodes && mutation.addedNodes.length > 0) {
           	 	// element added to DOM
            	var hasClass = [].some.call(mutation.addedNodes, function(el) {
                	return el.classList.contains('twitter-timeline');
            	});
            	if (hasClass) {
                	$(".twitter-timeline")[0].scrolling = "yes";
                	$(".twitter-timeline")[0].style.borderRadius = "0px"; 
            	}
        	}
    	});
	});

	var config = {
		attributes: true,
		childList: true,
		characterData: true
	};

	observer.observe($(".col.headItem")[0], config);
	var oldScroll = 0;
	var scrollingUp = true;
	var updateScroll = true;
	$(document).on('scroll',function() {
		if (oldScroll < $(document).scrollTop()) {
			scrollingUp = false;
		}
		else {
			scrollingUp = true;
		}
		oldScroll = $(document).scrollTop();

		if ($(document).scrollTop() >= 0) {
			if ($(document).scrollTop()/300.0 < 1.0) {
				var percentage = ($(document).scrollTop()/300.0);
				var height = (320.0 - percentage*240.0).toString() + "px";
				$("#mainPhotoContainer")[0].style.height = height;
				$(".container-fluid.imageOverlay")[0].style.height = height;
				$(".container-fluid.imageOverlay")[0].style.backgroundColor = "rgba(0,0,0,"+((percentage*0.5) + 0.2).toString()+")";

				$(".container.circlePicture")[0].style.width = (200.0-(percentage * 150.0)).toString()+"px";
				$(".container.circlePicture")[0].style.height = (200.0-(percentage * 150.0)).toString()+"px";
				$(".container.circlePicture img")[0].style.height = (200.0-(percentage * 150.0)).toString()+"px";
				$(".container.circlePicture img")[0].style.borderRadius = (200.0-(percentage * 150.0)).toString()+"px";

				$(".container.overlayText")[0].style.opacity = 1.0-(percentage*300.0)/170.0;

				$(".container.overlayButton").each(function(i,e){
					e.style.opacity = percentage;
				});

			}
			else {
				$("#mainPhotoContainer")[0].style.height = "80px";
				$(".container-fluid.imageOverlay")[0].style.height = "80px";
				$(".container-fluid.imageOverlay")[0].style.backgroundColor = "rgba(0,0,0,0.7)";
				$(".container.circlePicture")[0].style.width = "50px";
				$(".container.circlePicture")[0].style.height = "50px";
				$(".container.circlePicture img")[0].style.height = "50px";
				$(".container.circlePicture img")[0].style.borderRadius = "50px";
				$(".container.overlayText")[0].style.opacity = 0;
				$(".container.overlayButton").each(function(i,e){
					e.style.opacity = 1;
				});

				if (!scrollingUp && updateScroll && $(document).scrollTop() < 400) {
					updateScroll = false;
					$("html, body").stop();
					disableScroll();
					$("html, body").animate({
						scrollTop: 975,
					},800,function(){
						updateScroll = true;
						enableScroll();
					});
				}
				else if (updateScroll && $(document).scrollTop() < 975){
					updateScroll = false;
					disableScroll();
					$("html, body").stop();
					$("html, body").animate({
						scrollTop: 0,
					},800,function(){
						updateScroll = true;
						enableScroll();
					});
				}
			}
			repositionHero();
		}
	});
	$(".container.overlayButton").hover(function() {
		this.style.textShadow = "0px 0px 15px #FFFFFF";
		this.children[0].style.filter = "drop-shadow(0px 0px 15px #FFFFFF)";
	},function(){
		this.style.textShadow = "0px 0px 0px #FFFFFF";
		this.children[0].style.filter = "drop-shadow(0px 0px 0px #FFFFFF)";
	});
	// $(".container.overlayButton").click(function() {
	// 	if (this.innerText == "Twitter") {
	// 		window.location.href = "https://twitter.com/BroganMinerDev";
	// 	}
	// 	else if (this.innerText == "GitHub") {
	// 		window.location.href = "https://github.com/broha22";
	// 	}
	// });
/*
	$("#backButton").click(function(){
		updateScroll = false;
		disableScroll();
		$("#backButton").animate({
				opacity: 0,
			},400,function(){
				$("#backButton").hide();
			});
		$(".right-segue").animate({
			left: $("body").width(),
		},800,function(){
			updateScroll = true;
			enableScroll();

		});
		$(".container-fluid.topics").animate({
			right: 0,
		},800);
	});
	
	$(".row.topic").click(function(e){
		updateScroll = false;
		disableScroll();
		$(".right-segue").animate({
			left: 0,
		},800,function(){
			$("#backButton").show();
			$("#backButton").animate({
				opacity: 1,
			},400);
			updateScroll = true;
			enableScroll();

		});
		$(".container-fluid.topics").animate({
			right: $("body").width(),
		},800);
	});
*/
});