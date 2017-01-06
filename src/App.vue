<template>
  <div id="app">
	  <main-header></main-header>
    <mobile-header></mobile-header>
    <mobile-menu></mobile-menu>
	    <div class="container">
		    <main-banner></main-banner>
	    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from './components/root/main-header.vue'
import MainBanner from './components/main-banner.vue'
import MainFooter from './components/root/main-footer.vue'
import MobileHeader from './components/root/mobile-header.vue'
import MobileMenu from './components/root/mobile-menu.vue'
export default {
  name: 'app',
  components: { MainHeader, MainBanner, MainFooter, MobileHeader, MobileMenu }
}
</script>

<style src="./assets/sass/app.scss" lang="sass"></style>
