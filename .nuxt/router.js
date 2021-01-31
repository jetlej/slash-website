import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d5d0d240 = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _dc572cbc = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _0985b532 = () => interopDefault(import('../pages/redirect.vue' /* webpackChunkName: "pages/redirect" */))
const _573870a1 = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _a58a9b28 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/pricing",
    component: _d5d0d240,
    name: "pricing"
  }, {
    path: "/privacy",
    component: _dc572cbc,
    name: "privacy"
  }, {
    path: "/redirect",
    component: _0985b532,
    name: "redirect"
  }, {
    path: "/terms",
    component: _573870a1,
    name: "terms"
  }, {
    path: "/",
    component: _a58a9b28,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
