<template>
  <div>
    <Header />
    <Nuxt />
    <SignupModal />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import SignupModal from '../components/modal-signup.vue'
export default {
  components: {
    Header,
    Footer,
    SignupModal
  }
}
</script>

<style lang="scss"></style>
