import { createApp } from "vue";
import app from './app'
import router from './router'

createApp(app).use(router).mount("#app");