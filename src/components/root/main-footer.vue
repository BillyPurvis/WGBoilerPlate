<template>
  <footer class="main-footer">
    <div class="row">
      <div class="medium-4 large-2 columns">
        <h4>{{ title[0] }}</h4>
        <nav class="footer-menu">
          <ul>
            <li v-if="links!=null" v-for="link of links">
              <a v-bind:href='link.anchor.address'>{{ link.anchor.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="small-12 medium-4 large-3 columns">
        <h4>{{ title[1] }}</h4>
        <div v-if="enderecos!=null" class="footer-endereco" v-for="endereco of enderecos">
          <h5>{{ endereco.cidade }}</h5>
          <a href="#">
            {{ endereco.rua }} - {{ endereco.numero }}<br>CEP: {{ endereco.cep }}
          </a>
        </div>
      </div>
      <div class="small-12 medium-4 large-4 columns">
        <h4>{{ title[2] }}</h4>
        <div class="footer-atendimento">
          Segunda-feira à Sexta-feira<br>
          {{ atendimento.dia_util }}<br>
        </div>
      </div>
      <div class="small-12 medium-12 large-3 columns">
        <h4>{{ title[3] }}</h4>
        <div class="footer-contato">
          <nav class="contato-menu">
            <ul>
              <li v-if="links_contato!=null" v-for="link of links_contato">
                <a v-bind:href='link.anchor.address'>{{ link.anchor.name }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="small-12 medium-12 large-3 columns">
        <div class="newsletter-container">
          <h4>{{ title[4] }}</h4>
          <p>Cadastre seu email em nossa newsletter e receba todas as nossas novidades,
              promoções e notícias na íntegra! Tenha tudo em primeira mão.</p>
          <form method="post"  class="news-container" action="http://www.nossomarketing.com.br/emarketing/form.php?form=83" id="frmSS83" onsubmit="return CheckForm83(this);">
              <input type="email" class="text-news parsley-validated" name="email" placeholder="Digite seu email aqui" required>
              <input type="hidden" name="format" value="h">
              <input type="submit" name="enviar" class="button tiny button-news" value="Cadastrar">
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      title: ['menu', 'endereco', 'horário de atendimento', 'contato', 'newsletter'],
      links: [
        { anchor: {address: 'index.html', name: 'home'} },
        { anchor: {address: 'empresa.html', name: 'empresa'} },
        { anchor: {address: 'produtos.html', name: 'produtos'} },
        { anchor: {address: 'servicos.html', name: 'serviços'} },
        { anchor: {address: 'fotos.html', name: 'fotos'} },
        { anchor: {address: 'contato.html', name: 'contato'} }
      ],
      enderecos: [
        { cidade: 'Cidade 1',
          rua: 'Rua XXXXXXXXXX',
          numero: 'XXX',
          cep: 'XXXXX-XXX'
        },
        {
          cidade: 'Cidade 2',
          rua: 'Rua XXXXXXXXXX',
          numero: 'XXX',
          cep: 'XXXXX-XXX'
        }
      ],
      atendimento: {
        dia_util: '08:00 ao 12:00 e 13:30 às 18:00'
      },
      links_contato: [
        { anchor: {address: 'tel:xxxx-xxxx', name: '(45) XXXX-XXXX'} },
        { anchor: {address: 'tel:xxxxx-xxxx', name: '(45) XXXXX-XXXX'} },
        { anchor: {address: 'mailto:xxxxxxxxx@xxxx.com', name: 'xxxxxxxxx@xxxx.com'} }
      ]
    }
  }
}
</script>
