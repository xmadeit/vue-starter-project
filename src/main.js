import { createApp } from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'
import { uniGithub, uniAt } from 'vue-unicons/dist/icons';
import VueSplide from '@splidejs/vue-splide';

Unicon.add([uniGithub, uniAt])

createApp(App).use(Unicon).use(VueSplide).mount('#app')
