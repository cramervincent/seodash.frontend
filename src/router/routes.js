
const routes = [
   {
    path: '/welcome',
    component: () => import('layouts/LoginLayout.vue'),
    meta:{secure:false},
    children: [
      { path: '', component: () => import('pages/loginPage.vue'), name:'login' }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta:{secure:true},
    children: [
      { path: '', component: () => import('pages/backlinksPage.vue'), name:'backlinks' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
