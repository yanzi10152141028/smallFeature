import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Child = ()=>import("@/components/child");
const Parent = () => import("@/components/parent");
const Cache = () => import("@/components/cache")
Vue.use(Router)

export default new Router({
  routes: [
   {
      path:'/child/:id',
      component:Child,
      props:true,
      meta:{
        keepAlive:false
      }

    },{
      path:'/',
      component:Parent,
      meta:{
        keepAlive:false
      }
    },
    {
      path:'/helloworld',
      component:HelloWorld,
      meta:{
        keepAlive:false
      }
    },
    {
      path:'/cache',
      component:Cache,
      meta:{
        keepAlive:true,//该页面缓存
        isBack:false //判断上一个页面是哪一个
      }
    }
  ]
})
