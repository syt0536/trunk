import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Forget from '@/page/Forget'
import Contect from '@/page/Contect'
import Service from '@/page/Service'
import StatisticalChart from '@/page/StatisticalChart'
import MoleculeStucture from '@/page/MoleculeStucture'
import SearchResult from '@/page/SearchResult'
import ClinicalResult from '@/page/ClinicalResult'
import MoleculeStuctureDe from '@/page/MoleculeStuctureDe'
import MoleculeSubStuctureDe from '@/page/MoleculeSubStuctureDe'
import Fdaresult from '@/page/Fdaresult'
import detail from '@/page/detail'
Vue.use(Router)

const router = new Router({
  routes: [
    {
		path: '/',
		name: 'Home',
		component: Home,
		meta: { requiresAuth: false } 
    },{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: { requiresAuth: false } 
    },{
		path: '/login',
		name: 'Login',
		component: Login
    },{
		path: '/register',
		name: 'Register',
		component: Register
    },{
		path: '/forget',
		name: 'Forget',
		component: Forget
    },{
		path: '/contect',
		name: 'Contect',
		component: Contect,
		meta: { requiresAuth: false } 
    },{
		path: '/service',
		name: 'Service',
		component: Service,
		meta: { requiresAuth: false } 
    },{
		path: '/statisticalChart/:id',
		name: 'StatisticalChart',
		component: StatisticalChart,
		meta: { requiresAuth: true } 
    },{
		path: '/moleculeStucture',
		name: 'MoleculeStucture',
		component: MoleculeStucture,
		meta: { requiresAuth: false } 
    },{
		path: '/searchResult/:id',
		name: 'SearchResult',
		component: SearchResult,
		meta: { requiresAuth: true }
    },{
		path: '/clinicalResult/:id',
		name: 'ClinicalResult',
		component: ClinicalResult,
		meta: { requiresAuth: true } 
    },{
		path: '/moleculeStuctureDe',
		name: 'MoleculeStuctureDe',
		component: MoleculeStuctureDe,
		meta: { requiresAuth: true } 
	},
	{
		path: '/detail/:id',
		name: 'detail',
		component: detail,
		meta: { requiresAuth: true } 
	},
	{
		path: '/moleculeSubStuctureDe/:id',
		name: 'MoleculeSubStuctureDe',
		component: MoleculeSubStuctureDe,
		meta: { requiresAuth: true } 
	},
	{
		path: '/F',
		name: 'fda',
		component:Fdaresult  ,
		meta: { requiresAuth: true } 
	},
	{ 
    	path: '*', 
    	redirect: '/home',
		meta: { requiresAuth: false } 
	}
  ]
});

// 判断是否需要登录权限 以及是否登录
// router.beforeEach((to, from, next) => {
// 	if (to.matched.some(res => res.meta.requiresAuth)) {// 判断是否需要登录权限
// 		if (localStorage.getItem('username')) {// 判断是否登录
// 			next()
// 		} else {// 没登录则跳转到登录界面
// 			next({
// 				path: '/login',
// 				query: {redirect: to.fullPath}
// 			})
// 		}
// 	} else {
// 		next()
// 	}
// })

export default router
