<template>
  <section class="signup">
    <img class="logo" alt="Slash" src="images/logo.svg" />
    <form id="signup-form">
      <p>Create Account</p>
      <div class="errors">
        <div></div>
      </div>
      <div class="input-container">
        <input
          name="email"
          class="form-control input-lg"
          id="email"
          type="email"
          placeholder="E-mail"
          required
        />
      </div>
      <div class="input-container">
        <input
          name="password"
          class="form-control input-lg"
          id="password"
          placeholder="Password"
          type="password"
          required
        />
      </div>
      <div class="input-container">
        <input
          name="code"
          class="form-control input-lg"
          id="code"
          type="text"
          placeholder="Invite Code (optional)"
          :disabled="loading"
        />
      </div>
      <div>
        <button type="submit" class="btn btn-primary btn-lg btn-block">
          Sign Up
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  async mounted() {
    $('#email').focus()

    /*
    let tapfiliateId = null
    tap('getTrackingId', null, function(trackingId) {
      tapfiliateId = trackingId
      console.log('Tapfiliate Tracking ID: ' + tapfiliateId)
    })
    */

    $('#signup-form').submit((e) => {
      e.preventDefault()

      let data = {
        email: $('#email').val(),
        password: $('#password').val(),
        code: $('#code').val()
      }
      //if (tapfiliateId) data.affiliateId = tapfiliateId
      $('.errors > div').text('')

      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'https://api.taskslayer.io/auth/register',
        data: data,
        success: function(message) {
          console.log(message)
          window.location.href = '/get-started'
        },
        error: function(xhr, error) {
          console.log(xhr.responseText)
          $('.errors > div').text(xhr.responseText)
        }
      })
    })
  },
  methods: {},
  computed: {},
  head() {
    return {
      title: 'Slash - Signup',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A new breed of productivity app. Slice through your to-do lists by staying focused and in flow.'
        }
      ],
      bodyAttrs: {
        class: ['gray-bg', 'hide-header', 'hide-footer']
      }
    }
  }
}
</script>

<style lang="scss"></style>
