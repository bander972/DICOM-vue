import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible";
import api from "./services/api";
import svgroihttp from "./services/svgroihttp"

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
Vue.use(ViewUI);

import "../../netlify-example/metaDataProvider.js";
import "../../netlify-example/imageLoader.js";

import "../../netlify-example/reset.css";
import "../../netlify-example/app.css";
import "../../netlify-example/icon-classes.css";
// import triggerEvent from '../util/triggerEvent.js';
//添加触发事件
import triggerEvent from './cornerstoneTools/util/triggerEvent.js';
import imageRenderedEventDispatcher from './cornerstoneTools/eventDispatchers/imageRenderedEventDispatcher.js'

Vue.prototype.$api = api;
Vue.prototype.$svgroihttp=svgroihttp;

Vue.prototype.$triggerEvent=triggerEvent;
Vue.prototype.$imageRenderedEventDispatcher=imageRenderedEventDispatcher;


Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
