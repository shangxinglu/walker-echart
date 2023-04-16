
import { createRouter, createWebHashHistory } from 'vue-router'

const routerConfig = [

  {
    path: '/',
    name: '首页',
    component: () => import('../pages/index/index'),
  },
  {
    path: '/test',
    name: '测试',
    component: () => import('../pages/test/index'),
  },
  
 
 
 
]

const routerTestConfig = [
 
] as any

// if(isLocal){
//   routerConfig.push(...routerTestConfig)
// }

const router = createRouter({
  history: createWebHashHistory(),
  routes: routerConfig,
})

export default router
