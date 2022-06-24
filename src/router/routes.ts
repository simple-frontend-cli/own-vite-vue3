export const routes = [
  {
    title: '登录',
    name: 'login',
    path: '/login',
    component: () => import(`@/views/login/Login.vue`),
  },
  {
    title: '主页',
    name: 'home',
    path: '/',
    component: () => import(`@/views/home/Home.vue`),
    children: [
      {
        title: '仪表板',
        name: 'dashboard',
        path: '/dashboard',
        component: () => import(`@/views/dashboard/Dashboard.vue`),
      },
      {
        title: '404',
        name: '404',
        path: '/404',
        component: () => import(`@/views/404/404.vue`),
      },
      { path: '/', redirect: '/dashboard' },
    ],
  },
]
