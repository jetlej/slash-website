<template>
  <div class="h-screen w-full flex item-center align-center">
    <h3>Redirecting you back to Slash 👋🏻</h3>
  </div>
</template>

<script>
  export default {
    async mounted() {
      const params = new URLSearchParams(window.location.search)
      const name = params.get('n')
      let query = window.location.search.split('?')[1]
      window.location.replace('slash://' + name + '?' + query)
    },
    head() {
      return {
        title: 'Redirecting you to Slash...'
      }
    }
  }
</script>
