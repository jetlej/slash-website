<template>
  <section class="page-download">
    <div class="container">
      <h1 class="page-title">Download <b>Slash</b>.</h1>

      <div class="flex download-buttons">
        <div class="">
          <div class="platform desktop text-center">
            <img class="inline-block" src="/images/desktop.svg" />
          </div>
          <p>The full desktop experience</p>
          <div class="btn-container">
            <a
              data-platform="Mac"
              id="download-mac"
              class="btn btn-default btn-xl download"
              href="https://github.com/jetlej/slash-releases/releases/latest"
              target="_blank"
              >MacOS</a
            >
            <a
              data-platform="Windows"
              id="download-windows"
              class="btn btn-default btn-xl download"
              href="https://github.com/jetlej/slash-releases/releases/latest"
              >Windows</a
            >
            <!--
            <a
              data-platform="Linux"
              class="btn btn-default btn-xl download"
              href="/linux"
              >Linux</a
            >
            -->
          </div>
        </div>

        <div class="">
          <div class="platform">
            <img class="inline-block" src="/images/mobile.svg" />
          </div>
          <p>Simple companion app for adding tasks on-the-go</p>
          <div class="btn-container">
            <a
              class="download inline-block"
              data-platform="iOS"
              href="https://apps.apple.com/us/app/slash-list/id1471831108"
              target="_blank"
            >
              <img src="/images/app-store.png" />
            </a>
            <a
              class="download inline-block"
              data-platform="Android"
              href="https://play.google.com/store/apps/details?id=co.getslash"
              target="_blank"
            >
              <img src="/images/google-play.png" />
            </a>
          </div>
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
      'https://api.github.com/repos/jetlej/slash-releases/releases/latest'
    ).done(function(release) {
      let mac, windows, linux
      release.assets.forEach(function(asset) {
        console.log(asset.name)
        if (asset.name.endsWith('.dmg')) {
          mac = asset.browser_download_url
          if (mac) $('#download-mac').attr('href', mac)
        }
        if (asset.name.endsWith('.exe')) {
          windows = asset.browser_download_url
          if (windows) $('#download-windows').attr('href', windows)
        }
      })
    })

    $('.download-buttons a').on('click', (e) => {
      let platform = $(e.currentTarget).data('platform')
      ga('send', 'event', 'Download', 'click', platform)
    })
  },
  methods: {},
  computed: {},
  head() {
    return {
      title: 'Slash - Download',
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
