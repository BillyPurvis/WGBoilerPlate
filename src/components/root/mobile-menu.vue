<template>
  <div class="mobile-menu">
    <nav class="mobile-nav">
      <ul>
        <li v-if="links!=null" v-for="link of links">
          <a v-bind:href='link.anchor.address'>{{ link.anchor.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script src="../../../static/js/scripts.js" type="text/javascript"></script>
<script>
export default {
  data () {
    return {
      links: [
        { anchor: {address: 'index.html', name: 'home'} },
        { anchor: {address: 'empresa.html', name: 'empresa'} },
        { anchor: {address: 'produtos.html', name: 'produtos'} },
        { anchor: {address: 'servicos.html', name: 'serviços'} },
        { anchor: {address: 'fotos.html', name: 'fotos'} },
        { anchor: {address: 'contato.html', name: 'contato'} }
      ]
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
