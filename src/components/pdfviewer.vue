<template>
  <div class='container'>
    <pdf :src='"./static/" + source'></pdf>
  </div>
</template>
<script>
import pdf from 'vue-pdf'

export default {
  name: 'pdfviewer',
  components: {
    pdf
  },
  data () {
    return {
      source: ''
    }
  },
  created () {
    this.source = this.$route.params.src
  }
}
</script>
<style scoped>
  .container {
    padding-top: 2em;
  }
</style>
