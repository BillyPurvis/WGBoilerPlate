<template>
  <div id="app">
	<main-header></main-header>
	<div class="container">
	<router-view></router-view>
		<main-banner></main-banner>
		
	</div>
  </div>
</template>

<script>
import MainHeader from './components/root/main-header.vue'
import MainBanner from './components/main-banner.vue'
export default {
  name: 'app',
  components: { MainHeader, MainBanner }
}
</script>

<style src="./assets/sass/app.scss" lang="sass"></style>
