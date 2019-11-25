import Vue from 'vue/dist/vue.esm.js'
import Header from './components/header.vue'

var app = new Vue({
    el: '#header_only',
    components: {
    'navbar': Header
  }
});
