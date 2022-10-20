export default [
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects/index.vue'),
  },
  {
    path: '/projects/:id',
    name: 'project',
    component: () => import('../views/Projects/Id/index.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings/index.vue')
  },
  {
    path: '*',
    name: 'default'
  }
]