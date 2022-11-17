import { createApp } from "vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import App from "./App.vue";

const app = createApp(App);

const pinia = createPinia();

axios.defaults.baseURL = "http://openlibrary.org/";
app.use(VueAxios, axios);
app.use(router);
app.use(pinia);

app.mount("#app");
