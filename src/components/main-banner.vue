<template>
    <div class="parent-root">
    
    <!-- Router Link -->
    <router-link to="/">Go To root Route</router-link>
    <router-link to="/foo">Go To Foo Route</router-link>
    
    <div class="main-banner">
        <div class="row full-width">
            <div class="small-12 columns">
                <div class="banner-carousel">
                    <img  v-if="banners!=null" v-for="banner in banners" v-bind:src='banner.url' v-bind:alt='banner.alt'>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-env  jquery */
export default {
  data () {
    return {
      banners: [
        {url: require('assets/img/banners/banner.png'), alt: 'Banner 01'},
        {url: require('assets/img/banners/banner.png'), alt: 'Banner 02'}
      ]
    }
  },
  created: function () {
    this.slick() // uses lifeCycle hook to call method once the Vue instance is made
  },
  methods: {
    slick: function () {
      console.log('Slick')
    }
  }
}
</script>
