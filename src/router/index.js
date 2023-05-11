import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { x: 0, y: 0, scrollBehavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/HomeItem.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../components/VaildTest.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/LoginItem.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
      children: [
        {
          path: 'chairs',
          name: 'chairs',
          component: () => import('../views/ProductView.vue')
        },
        {
          path: ':item', // 預留 接後端｜api 使用
          name: 'item',
          props: true,
          // {  message: 'Welcome to page!'},
          component: () => import('../views/ProductView.vue')
        }
      ]
    },
    {
      path: '/backend',
      name: 'backend',
      component: () => import('../views/Admin/BackendView.vue')
    },
    { path: '/:domain(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') }
  ]
})

// backend 權限設置
// router.beforeEach((to, from, next) => {
//   console.log(to, from)
//   if (to.path === '/backend') {
//     if (localStorage.getItem('name') === 'benson') {
//       next()
//     } else {
//       alert('未開放權限')
//     }
//   } else {
//     next()
//   }
// })

export default router
