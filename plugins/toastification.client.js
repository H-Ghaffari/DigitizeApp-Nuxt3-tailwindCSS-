import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import "~/assets/css/vueToastificationCustom.css";

export default defineNuxtPlugin((nuxtApp) => {
  //equivalent with app.use(Toast, options);
  nuxtApp.vueApp.use(Toast, {
    position: POSITION.BOTTOM_CENTER,
    rtl: true,
  });
});
