<template>
  <div class="modal try">
    <div>
      <h2>What's your email?</h2>
      <p>(We'll send you a download link)</p>
      <div class="btn-container subscribe-form subscribe download-form">
        <form class="button-form">
          <input
            type="email"
            class="form-control input-xl"
            name="EMAIL"
            placeholder="Email"
          />
          <button type="submit" class="btn btn-xl btn-default">
            <img class="loading" src="images/loading.svg" />
            <img class="send" src="images/send.svg" />
            <img class="checkmark" src="images/checkmark.svg" />
            <span></span>
          </button>
        </form>
        <span class="result"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-signup'
}
</script>

<style lang="scss" scoped></style>
