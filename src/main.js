import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './utils/http.js'
import api from './utils/api.js'
Vue.prototype.http = http
Vue.prototype.api = api
import store from './store'
import { 
  Button, 
  Tabbar, 
  TabbarItem, 
  NavBar, Card, 
  Switch, 
  Stepper,
  Grid, 
  GridItem,
  Toast,
  DropdownMenu, 
  DropdownItem,
  Field,
  Panel,
  List,
  Pagination,
  PullRefresh,
} from 'vant';
Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Card);
Vue.use(Switch);
Vue.use(Stepper);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Toast);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Field);
Vue.use(Panel);
Vue.use(List);
Vue.use(Pagination);
Vue.use(PullRefresh);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
