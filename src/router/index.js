
import Vue from 'vue';
import Router from 'vue-router';
import HelleoWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/helleoWorld',
		name: HelleoWorld,
		component: HelleoWorld
	}],
	mode: 'history'
});

