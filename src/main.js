import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import deploy from './deploy.vue'
import router from './router'

const app = createApp(deploy)

app.use(createPinia())
app.use(router)

app.mount('#app')
