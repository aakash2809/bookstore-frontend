
import Vue from 'vue';
import Router from 'vue-router';
import HelleoWorld from '@/components/HelloWorld';
import Login from '@/pages/Login';
import Registration from '@/pages/Register';
import RegistrationOrLogin from '@/pages/RegistrationOrLogin';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/helleoWorld',
		name: HelleoWorld,
		component: HelleoWorld
	},
	{
		path: '/login',
		name: Login,
		component: Login
	}, {
		path: '/register',
		name: Registration,
		component: Registration
	},
	{
		path: '/registrationOrLogin',
		name: RegistrationOrLogin,
		component: RegistrationOrLogin
	}
	],
	mode: 'history'
});

