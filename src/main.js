import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import antd from "ant-design-vue";

import "./assets/css/tailwind.css";
import "./assets/css/base.css";

const app = createApp(App);
app.use(antd);
app.use(router);
app.mount("#app");
