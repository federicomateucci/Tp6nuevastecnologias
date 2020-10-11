import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VuelidatePlugin } from '@vuelidate/core'
import axios from 'axios'
import VueAxios from 'vue-axios'

/////////////////
import  'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import "popper.js"
///////////////////

createApp(App)
.use(router)
.use(VuelidatePlugin)
.use(VueAxios, axios)
.mount('#app')  // uso el router en la app y todo montado en el ID del HTML
