
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 定义路由组件
const Login = require('./components/login.vue');
const List = require('./components/list.vue');
const Detail = require('./components/detail.vue');




// 定义路由，配置路由映射
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/list', component: List },
  { path: '/detail', component: Detail }
];

// 创建router实例
const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  data: function () {
    return {
      userInfo: null
    };
  },
  router

});