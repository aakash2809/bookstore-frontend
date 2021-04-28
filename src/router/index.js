import Vue from 'vue';
import Router from 'vue-router';
import RegistrationOrLogin from '@/pages/RegistrationOrLogin';
import DashBoard from '@/pages/DashBoard';
import ForgotPassword from '@/pages/ForgotPassword';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';

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
		}
	],
	mode: 'history'
});

