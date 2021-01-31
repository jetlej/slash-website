export { default as Footer } from '../../components/footer.vue'
export { default as Header } from '../../components/header.vue'
export { default as ModalSignup } from '../../components/modal-signup.vue'
export { default as Testimonials } from '../../components/testimonials.vue'

export const LazyFooter = import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyModalSignup = import('../../components/modal-signup.vue' /* webpackChunkName: "components/modal-signup" */).then(c => c.default || c)
export const LazyTestimonials = import('../../components/testimonials.vue' /* webpackChunkName: "components/testimonials" */).then(c => c.default || c)
