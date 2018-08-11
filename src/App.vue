<template>
  <div id="app">
    <div class="navP">
      <b-navbar toggleable="sm" type="dark" variant="info" class="top" style="background-image: linear-gradient(to bottom, rgba(26,26,26,0.7) 70%, rgba(26,26,26,1)), url(static/nav.png);">
        <b-navbar-brand href="/#/" class="brand">
          <img style="background-image:url(static/me.png);" class="round-nav-image">
          Brogan Miner
        </b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item-dropdown style="">
          <template slot="button-content">
            <span class="link">Projects</span>
          </template>
          <b-dropdown-item href="/#/projects">Web Development</b-dropdown-item>
          <b-dropdown-item href="/#/projects">iOS Development</b-dropdown-item>
          <b-dropdown-item href="/#/projects">Computer Engineering</b-dropdown-item>
        </b-nav-item-dropdown>
          <b-nav-item href="/#/about"><span class="link">About</span></b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div class="router-container container-fluid">
      <router-view/>
    </div>
    <div class="footer page-footer">
      <div class="footer-copyright text-center">© 2018 Copyright: Brogan Miner</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.container {
  background-color: rgb(240,240,240);
  margin-top: 1.5em;
  border-radius: 10px;
  border: solid 1px rgb(200,200,200);
  padding: 0.5em;
}
#app {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
}
.navP {
  width: 100%;
}
.router-container {
  margin-bottom: 4em;
}
body {
  background-color: rgb(55,55,55);
}
.footer {
  position: absolute;
  bottom: 0px;
  color: white;
  margin-top: 2em;
  padding: 1em;
  width: 100%;
  background-color: rgb(26,26,26);
  font-size: 0.8em;
}
.btn-primary {
  background-color: rgb(26,26,26);
  border-color: rgb(10,10,10);
}
.btn-primary:hover {
  background-color: rgb(100,100,100);
  border-color: rgb(80,80,80);
}
.btn-primary:active {
  background-color: rgb(50,50,50) !important;
  border-color: rgb(40,40,40) !important;
}
</style>

<style scoped>

.top {
  background-color: #000 !important;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2em;
}
.brand > * {
  margin: 0.5em;
}
.link  {
  /* color: rgb(26,26,26) !important; */
}
.round-nav-image {
  width: 100px;
  height: 100px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  border-radius: 100px;
  border: 2px solid #FFF;
}

</style>
