<template>
  <div class="root-cont">
    <h1>{{ msg }}</h1>
    <h2>PIROCA ALADA {{ routeName }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Teste',
  components: {
  },
  data () {
    return {
      msg: 'Welome to Vue-Cli',
      routeName: this.$route.name // gets this components name
    }
  }
}
</script>

<style lang="sass">

</style>
