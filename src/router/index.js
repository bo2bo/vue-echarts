import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/tendaily',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [{
          path: '/tendaily',
          component: resolve => require(['../components/pages/ArticleTenDaily.vue'], resolve)
        },
        {
          path: '/hotarticles',
          component: resolve => require(['../components/pages/ArticleHotArticles.vue'], resolve)
        },
        {
          path: '/expertcomment',
          component: resolve => require(['../components/pages/ArticleExpertComment.vue'], resolve)
        },
        {
          path: '/commenttendaily',
          component: resolve => require(['../components/pages/CommentTenDaily.vue'], resolve)
        },
        {
          path: '/commenthotarticles',
          component: resolve => require(['../components/pages/CommentHotArticles.vue'], resolve)
        },
        {
          path: '/commentexpertcomment',
          component: resolve => require(['../components/pages/CommentExpertComment.vue'], resolve)
        },
        {
          path: '/iask',
          component: resolve => require(['../components/pages/CommentIAsk.vue'], resolve)
        },
        {
          path: '/iaskcomment',
          component: resolve => require(['../components/pages/CommentIAskComment.vue'], resolve)
        },
        {
          path: '/seesawbattle',
          component: resolve => require(['../components/pages/CommentSeesawBattle.vue'], resolve)
        },
        {
          path: '/partakeseesawbattle',
          component: resolve => require(['../components/pages/PartakeSeesawBattle.vue'], resolve)
        },
        {
          path: '/partakecontestlist',
          component: resolve => require(['../components/pages/PartakeContestlList.vue'], resolve)
        },
        {
          path: '/partakecontestindex',
          component: resolve => require(['../components/pages/PartakeContestlIndex.vue'], resolve)
        },
        {
          path: '/index',
          component: resolve => require(['../components/pages/index.vue'], resolve)
        },
        {
          path: '/high',
          component: resolve => require(['../components/pages/high.vue'], resolve)
        },
        {
          path: '/rotationchart',
          component: resolve => require(['../components/pages/PictureRotationChart.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/common/Login.vue'], resolve)
    }
  ]
})
