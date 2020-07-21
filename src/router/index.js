import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import SignUpPage from '@/components/SignUpPage'
import SignInPage from '@/components/SignInPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/sign-up',
      name: 'SignUpPage',
      component: SignUpPage
    },
    {
      path: '/sign-in',
      name: 'SignInPage',
      component: SignInPage
    }
  ]
})
