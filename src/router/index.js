import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/panorama',
      component: resolve => require(['../components/pages/Panorama.vue'], resolve),
      children: [{
          path: '/macrography',
          component: resolve => require(['../components/pages/Macrography.vue'], resolve)
        },
        {
          path: '/industry',
          component: resolve => require(['../components/pages/Industry.vue'], resolve)
        },
        {
          path: '/datauploading',
          component: resolve => require(['../components/pages/DataUploading.vue'], resolve)
        },
        {
          path: '/dataevaluation',
          component: resolve => require(['../components/pages/DataEvaluation.vue'], resolve)
        },
        {
          path: '/AD',
          component: resolve => require(['../components/pages/AD.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/common/Login.vue'], resolve)
    }
  ]
})
