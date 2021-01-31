<template>
  <section class="coming-soon">
    <div class="container">
      <h1 class="page-title has-subtitle">
        <b>Slash</b> for Linux is coming soon!
      </h1>
      <p class="subtitle center">
        Sign up to be notified below, and follow progress
        <a href="https://slash.nolt.io/33">here</a>.
      </p>

      <div class="subscribe">
        <div class="btn-container subscribe-form subscribe">
          <form>
            <input
              id="input"
              type="email"
              class="form-control input-xl"
              name="EMAIL"
              placeholder="Your email"
            />
            <button id="subscribe" type="submit" class="btn btn-xl btn-default">
              <img class="loading" src="images/loading.svg" />
              <img class="send" src="images/send.svg" />
              <img class="checkmark" src="images/checkmark.svg" />
              <span>Notify Me</span>
            </button>
          </form>
          <span class="result"></span>
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
  async mounted() {},
  methods: {},
  computed: {},
  head() {
    return {
      title: 'Slash for Linux',
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
