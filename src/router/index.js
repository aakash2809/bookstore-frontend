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

export default new Router({
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
			component: AdminDashboard
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

