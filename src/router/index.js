import Vue from 'vue';
import Router from 'vue-router';
import RegistrationOrLogin from '@/pages/RegistrationOrLogin';
import DashBoard from '@/pages/DashBoard';
import ForgotPassword from '@/pages/ForgotPassword';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';
import BookDetail from '@/pages/BookDetail';
import Mycart from '@/pages/Mycart';
import ConfirmOrder from '@/pages/ConfirmOrder';
import AddressDetails from '@/components/AddressDetails';

Vue.use(Router);

export default new Router({
	routes: [
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
		}
	],
	mode: 'history'
});

