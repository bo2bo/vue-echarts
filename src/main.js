// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router'
import axios from 'axios'
import echarts from 'echarts'
import $ from "jquery"
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
// 全局变量及方法
import global_ from './components/Global'  //引用文件
Vue.prototype.GLOBAL = global_    //挂载到Vue实例上面
// 富文本编辑
// import './../static/ueditor/ueditor.config'
// import './../static/ueditor/ueditor.all.min'
// import './../static/ueditor/lang/zh-cn/zh-cn'　　　
// import './../static/ueditor/ueditor.parse.min'

Vue.use(ElementUI)
Vue.config.productionTip = false
axios.defaults.crossDomain = true;
axios.defaults.withCredentials=true;

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.$jquery = $;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
