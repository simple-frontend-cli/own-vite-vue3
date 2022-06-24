import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

import { getToken } from '../utils/localStorage'

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

router.beforeEach(async (to, form, next) => {
  if (getToken()) {
    next()
  } else {
    if (to.name === 'login') {
      next()
    } else {
      next({ name: 'login', query: { redirect: to.fullPath } })
    }
  }
})

export default router
