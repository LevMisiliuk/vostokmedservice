import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './routes'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

router.beforeEach((to, from, next) => {
    const lang = to.params.lang;

    if(!['ua', 'ru', 'en'].includes(lang)) {
      const locale = localStorage.getItem('lang')
      i18n.global.locale.value = locale
      router.push({ path: `${locale}/404` });
      if (!locale) router.push({ path: '/ua' });
    }

    if(i18n.global.locale.value !== lang) {
      i18n.global.locale.value = lang;
    }

    return next();
})

createApp(App)
    .use(i18n)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
