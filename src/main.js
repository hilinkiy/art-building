import {
    createApp
} from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router.js";
import { MotionPlugin } from "@vueuse/motion";

createApp(App).use(MotionPlugin).use(router).mount('#app')