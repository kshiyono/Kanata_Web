import Vue from 'vue/dist/vue.esm.js'
import Footer from './components/footer.vue'

var app = new Vue({
    el: '#footer_only',
    components: {
    'navfoo': Footer
  }
});
