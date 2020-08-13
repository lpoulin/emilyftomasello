import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



Vue.use(vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      dark: {
      primary: '#607d8b',
      secondary: '#673ab7',
      accent: '#2196f3',
      error: '#f44336',
      warning: '#ff9800',
      info: '#009688',
      success: '#4caf50'
      }
    },
  },
})
