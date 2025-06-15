import './assets/main.css'
import { createApp } from 'vue'
import App from './AppHome.vue'
import routerRoutes from './routes'

const app = createApp(App)
app.use(routerRoutes);

app.mount('#app');