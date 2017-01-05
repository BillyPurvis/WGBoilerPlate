<template>
	<header class="main-header">
    	<div class="row">
    		<div class="small-3 columns">
    			<img v-bind:src="url" alt="Logo" class="logo">
    		</div>
    		<div class="small-9 columns">
				<nav class="main-menu">
					<ul>
						<li v-if="links!=null" v-for="link in links">
							<a v-bind:href='link.anchor.address'>{{ link.anchor.name }}</a>
						</li>
					</ul>
				</nav>
    		</div>
    	</div>
    </header>
</template>

<script>
export default {
  data () {
    return {
      url: require('assets/img/logo/logo.png'),
      links: [
        { anchor: {address: 'index.html', name: 'home'} },
        { anchor: {address: 'empresa.html', name: 'empresa'} },
        { anchor: {address: 'fotos.html', name: 'fotos'} },
        { anchor: {address: 'contato.html', name: 'contato'} }
      ]
    }
  }
}
</script>
