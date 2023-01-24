import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'

const app = createApp(App)
app.use(router).use(store).mount('#root');

if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
      app.unmount();
    });
  }