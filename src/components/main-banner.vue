<template>
    <div class="main-banner">
        <div class="row full-width">
            <div class="small-12 columns">
                <div class="banner-carousel">
                    <img  v-if="banners!=null" v-for="banner in banners" v-bind:src='banner.url' v-bind:alt='banner.alt'>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      banners: [
        {url: require('assets/img/banners/banner.png'), alt: 'Banner 01'},
        {url: require('assets/img/banners/banner.png'), alt: 'Banner 02'}
      ]
    }
  },

  methods: {
    initSlick: function () {
      this.$nextTick(function () {
        $('.banner-carousel').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: true,
          prevArrow: '<svg version="1.1" class="left-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 487.622 487.622" style="enable-background:new 0 0 487.622 487.622;" xml:space="preserve"><g><g><circle style="fill:#D21819;" cx="243.811" cy="243.811" r="243.811"/><path style="fill:#C20809;" d="M486.922,262.38L365.708,121.912l-131.415,87.582l-112.381,34.317l202.325,230.212 C413.786,442.74,479.517,360.705,486.922,262.38z"/><polygon style="fill:#FFFFFF;" points="121.913,243.811 365.708,121.912 281.928,243.811 365.708,365.708 "/></g></g></svg>',
          nextArrow: '<svg version="1.1" class="right-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 487.622 487.622" style="enable-background:new 0 0 487.622 487.622;" xml:space="preserve"><g><g><circle style="fill:#D21819;" cx="243.811" cy="243.811" r="243.811"/><path style="fill:#C20809;" d="M486.922,262.38L365.708,121.912l-131.415,87.582l-112.381,34.317l202.325,230.212 C413.786,442.74,479.517,360.705,486.922,262.38z"/><polygon style="fill:#FFFFFF;" points="121.913,243.811 365.708,121.912 281.928,243.811 365.708,365.708 "/></g></g></svg>',
          speed: 1500
        })
      })
    }
  }
}
</script>
