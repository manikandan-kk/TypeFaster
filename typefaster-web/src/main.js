import './assets/main.css'
import { createApp } from 'vue'
import App from './AppHome.vue'
import { landingPageRouter } from './routes'

const app = createApp(App)
app.use(landingPageRouter);

app.mount('#app');