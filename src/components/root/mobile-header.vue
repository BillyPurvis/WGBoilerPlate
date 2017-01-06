<template>
  <header class="mobile-header">
    <div class="row">
      <div class="small-3 columns">
        <img v-bind:src="url" alt="Logo" class="logo">
      </div>
      <div class="small-9 columns">
        <div id="menu-wrapper" class="menu-wrapper">
          <svg width="100px" height="100px">
            <path id="pathA" d="M 30 40 L 70 40 C 90 40 90 75 60 85 A 40 40 0 0 1 20 20 L 80 80"/>
            <path id="pathB" d="M 30 50 L 70 50"/>
            <path id="pathC" d="M 70 60 L 30 60 C 10 60 10 20 40 15 A 40 38 0 1 1 20 80 L 80 20"/>
          </svg>
          <button id="menu-btn" class="menu-btn"></button>
        </div>
      </div>
    </div>
  </header>
</template>

<script src="../../../static/js/scripts.js" type="text/javascript"></script>
<script>
export default {
  data () {
    return {
      url: require('assets/img/logo/logo.png')
    }
  },

  mounted: function () {
    this.svgMenu()
  },

  methods: {
    svgMenu () {}
  }
}
</script>
