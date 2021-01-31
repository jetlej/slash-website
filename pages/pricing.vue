<template>
  <div>
    <section class="pricing">
      <div class="container">
        <h1>
          <b>50</b> tasks for free.<br />
          <b>50</b> more for each invite.<br />
          <b>$5/mo</b> for unlimited<br />
        </h1>

        <div class="btn-container">
          <a class="btn btn-default btn-xl try-it cta">Try it now</a>
          <small>for macOS + Windows</small>
        </div>
      </div>
    </section>

    <section class="plans bg-white">
      <div class="container">
        <h2>Plans</h2>
        <div class="plan">
          <h3>
            <b>Free</b>
            <span>$0</span>
          </h3>
          <div>
            <p>50 free tasks</p>
            <p>50 tasks for each invite</p>
            <p>All features</p>
          </div>
        </div>
        <div class="plan">
          <h3>
            <b>Unlimited</b>
            <span>$5/mo</span>
          </h3>
          <div>
            <p>Unlimited tasks</p>
            <p>Priority support 🌟</p>
            <p>All features</p>
          </div>
          <small>$5/month ($60/year) billed annually</small>
          <small>$7.95/month if billed monthly</small>
        </div>
      </div>
    </section>

    <section class="bottom-cta gray-bg">
      <div class="container container-sm">
        <h2>Ready to <b>slash</b> some tasks?</h2>
        <a class="btn btn-default btn-xl try-it cta">Try it now</a>
        <small>for macOS + Windows</small>
      </div>
    </section>
  </div>
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
      title: 'Slash - Pricing',
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
