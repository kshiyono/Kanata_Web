import Vue from 'vue/dist/vue.esm.js'
import Footer from './components/footer.vue'

var app = new Vue({
    el: '#footer-only',
    components: {
    'navfoo': Footer
  }
});
