<template>
  <div id="app">
	  <main-header></main-header>
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
export default {
  name: 'app',
  components: { MainHeader, MainBanner, MainFooter }
}
</script>

<style src="./assets/sass/app.scss" lang="sass"></style>
