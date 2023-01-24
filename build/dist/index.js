import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import { createApp } from '../_snowpack/pkg/vue.js';
import App from './App.vue.js';
import router from './router/index.js';
import store from './store/index.js'

const app = createApp(App)
app.use(router).use(store).mount('#root');

if (undefined /* [snowpack] import.meta.hot */ ) {
    undefined /* [snowpack] import.meta.hot */ .accept();
    undefined /* [snowpack] import.meta.hot */ .dispose(() => {
      app.unmount();
    });
  }