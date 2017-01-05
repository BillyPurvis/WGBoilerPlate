import Vue from 'vue'
import VueRouter from 'vue-router'

// Use VueRouter for Vue
Vue.use(VueRouter)

// Import all the components here
import App from './App'
import Foo from './components/Foo'

/* eslint-disable no-new */

// Create instance of Router and define routes
const router = new VueRouter({
  mode: 'history', // pushes to browser history API
  base: __dirname,
  routes: [
    { path: '/foo', component: Foo, name: 'Foo' }
  ]
})

// Extend Vue to use router obj then mount
new Vue(Vue.util.extend({ router }, App)).$mount('#app')
