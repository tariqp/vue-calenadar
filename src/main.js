import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextAreaAutosize)
Vue.config.productionTip = false

firebase.initializeApp({
	apiKey: "AIzaSyD1hcNvV1xpidrfikAle6CQPhfI05qBYzw",
    authDomain: "vue-calendar-b4947.firebaseapp.com",
    databaseURL: "https://vue-calendar-b4947.firebaseio.com",
    projectId: "vue-calendar-b4947",
    storageBucket: "vue-calendar-b4947.appspot.com",
    messagingSenderId: "445667649141",
    appId: "1:445667649141:web:326b148d3cdb15e30b3a3c"
})

export const db = firebase.firestore()
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
