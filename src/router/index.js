import Vue from 'vue';
import Router from 'vue-router';
import RegistrationOrLogin from '@/pages/RegistrationOrLogin';
import RegistrationOrLoginForAdmin from '@/pages/RegistrationOrLoginForAdmin';
import DashBoard from '@/pages/DashBoard';
import AdminDashboard from '@/pages/AdminDashboard';
import ForgotPassword from '@/pages/ForgotPassword';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';
import BookDetail from '@/pages/BookDetail';
import Mycart from '@/pages/Mycart';
import ConfirmOrder from '@/pages/ConfirmOrder';
import AddressDetails from '@/components/AddressDetails';
import SearchResult from '@/pages/SearchResult';
import RootPage from '@/pages/RootPage';

Vue.use(Router);
let router = new Router({
	routes: [
		{
			path: '/',
			name: RootPage,
			component: RootPage
		},
		{
			path: '/admin',
			name: RegistrationOrLoginForAdmin,
			component: RegistrationOrLoginForAdmin
		},
		{
			path: '/registrationOrLogin',
			name: RegistrationOrLogin,
			component: RegistrationOrLogin
		},
		{
			path: '/dashBoard',
			name: DashBoard,
			component: DashBoard
		},
		{
			path: '/adminDashboard',
			name: AdminDashboard,
			component: AdminDashboard,
			beforeEnter: (to, from, next) => {

				if (to.path !== '/admin') next('/admin')
				else {
					console.log("else is executing");
					return next();
				}
			}
		},
		{
			path: '/forgotPassword',
			name: ForgotPassword,
			component: ForgotPassword
		},
		{
			path: '/forgotPasswordForm',
			name: ForgotPasswordForm,
			component: ForgotPasswordForm
		},
		{
			path: '/bookDetail',
			name: BookDetail,
			component: BookDetail
		},
		{
			path: '/myCart',
			name: Mycart,
			component: Mycart
		},
		{
			path: '/confirmOrder',
			name: ConfirmOrder,
			component: ConfirmOrder
		},
		{
			path: '/addressDetails',
			name: AddressDetails,
			component: AddressDetails
		},
		{
			path: '/searchResult',
			name: SearchResult,
			component: SearchResult
		},
	],
	mode: 'history'
});

//const openRoutes = ['DashBoard', 'ForgotPasswordForm', 'RootPage', 'SearchResult', 'AddressDetails', 'ConfirmOrder', 'Mycart',];

// router.beforeEach((to, from, next) => {

// 	if (to.name !== 'RegistrationOrLoginForAdmin') next({ name: 'RegistrationOrLoginForAdmin' })
// 	else next()
// 	/* let a = 9;
// 	let b = 3;
// 	console.log(openRoutes.includes('DashBoard'));
// 	console.log(window.token); */

// 	/* if (openRoutes.includes('DashBoard')) {
// 		next();
// 	} else if (a == b) {
// 		console.log("elseif")
// 		next()
// 	}
// 	else {
// 		console.log("else");
// 		next('/admin')
// 	} */
// })

export default router;

