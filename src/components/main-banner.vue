<template>
    <div class="parent-root">

    <!-- Router Link -->
    <!-- <router-link to="/" class="tet">Pagina Principal</router-link>
    <router-link to="/foo" class="tet">Pagina da Rota</router-link> -->

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
        {url: require('assets/img/banners/banner.png'), alt: 'Banner 02'},
        {url: require('assets/img/banners/banner.png'), alt: 'Banner 03'}
      ]
    }
  },
  mounted: function () {
    this.slick() // uses lifeCycle hook to call method once the Vue instance is made
  },
  methods: {
    slick: function () {
      $('.banner-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2600,
        arrows: true,
        prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="left arrow" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve"><g id="keyboard-arrow-left"><polygon points="247.35,270.3 130.05,153 247.35,35.7 211.65,0 58.65,153 211.65,306" fill="#292929"/></g></svg>',
        nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="right arrow" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve"><g id="chevron-right"><polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153 " fill="#292929"/></g></svg>',
        dots: true,
        speed: 1300
      })
    }
  }
}
</script>
