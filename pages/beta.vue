<template>
  <section class="coming-soon">
    <div class="container">
      <h1><b>Slash</b> Beta</h1>
      <p class="subtitle center">Try out new features and give feedback.</p>

      <div class="download-buttons">
        <div class="btn-container">
          <a
            data-platform="Mac"
            id="download-mac-beta"
            class="btn btn-default btn-xl download"
            href="https://github.com/jetlej/slash-beta-releases/releases/latest"
            target="_blank"
            >MacOS</a
          >
          <a
            data-platform="Windows"
            id="download-windows-beta"
            class="btn btn-default btn-xl download"
            href="https://github.com/jetlej/slash-beta-releases/releases/latest"
            >Windows</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  async mounted() {
    $.getJSON(
      'https://api.github.com/repos/jetlej/slash-beta-releases/releases/latest'
    ).done(function(release) {
      let directUrl, macUrl, windowsUrl
      release.assets.forEach(function(asset) {
        if (asset.name.endsWith('.dmg')) {
          macUrl = asset.browser_download_url
        }
        if (asset.name.endsWith('.exe')) {
          windowsUrl = asset.browser_download_url
        }
      })
      $('#download-mac-beta').attr('href', macUrl)
      $('#download-windows-beta').attr('href', windowsUrl)
    })
  },
  methods: {},
  computed: {},
  head() {
    return {
      title: 'Slash - Beta',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A new breed of productivity app. Slice through your to-do lists by staying focused and in flow.'
        }
      ],
      bodyAttrs: {
        class: ['gray-bg']
      }
    }
  }
}
</script>

<style lang="scss"></style>
