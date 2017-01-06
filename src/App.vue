<template>
  <div id="app">
    <!-- Import Main-Header Component -->
    <main-header></main-header>
    <!-- Import Mobile-Header Component -->
    <mobile-header></mobile-header>
    <!-- Import Mobile-Menu Component -->
    <mobile-menu></mobile-menu>
    <!-- Main Container -->
    <div class="container">
      <!-- Import Main-Banner Component -->
      <main-banner></main-banner>
    </div>
    <!-- Import Main-Footer Component -->
    <main-footer></main-footer>
  </div>
</template>

<script>
// Import Components
import MainHeader from './components/root/main-header'
import MainBanner from './components/main-banner'
import MainFooter from './components/root/main-footer'
import MobileHeader from './components/root/mobile-header'
import MobileMenu from './components/root/mobile-menu'

// Component instance
export default {
  name: 'app',
  components: {
    MainHeader,
    MainBanner,
    MainFooter,
    MobileHeader,
    MobileMenu }
}
</script>

<style src="./assets/sass/app.scss" lang="sass"></style>
