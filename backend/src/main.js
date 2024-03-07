import './assets/main.css'

import store from  './store';
import { createApp } from 'vue'
import './index.css';
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(store)
app.use(createPinia())
app.mount('#app')