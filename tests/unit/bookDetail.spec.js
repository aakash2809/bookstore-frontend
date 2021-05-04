/********************************************************************************************************
 * @file    : bookDetail.spec.js
 * @purpose : to test BookDetail component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 *********************************************************************************************************/

//import { createLocalVue, shallowMount } from '@vue/test-utils';
import BookDetail from "../../src/pages/BookDetail";
//import MyCart from "../../src/pages/Mycart"
//import Snackbar from '../../src/components/SnackBarNotify.vue';
//import AppBar from '../../src/components/AppBar';
import { createLocalVue, shallowMount } from '@vue/test-utils';
//import AddressDetails from '../../src/components/AddressDetails';
import Vuetify from 'vuetify';

describe('BookDetail.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);

        wrapper = shallowMount(BookDetail, localVue);

    });

    it('renders a vue instance', () => {
        expect(shallowMount(BookDetail).isVueInstance()).toBe(true);
    });
});


/* import Vuetify from 'vuetify';
describe('login.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);

        wrapper = shallowMount(BookDetail, localVue);

    });

    it('renders a vue instance', () => {
        expect(shallowMount(BookDetail).isVueInstance()).toBe(true);
    });
}); */

/* describe('BookDetail.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        wrapper = shallowMount(BookDetail, localVue);
    });

    it.skip('check if child Snackbar exists', () => {
        expect(wrapper.contains(Snackbar)).toBe(true);
    });

    it.skip('check if child MyCart exists', () => {
        expect(wrapper.contains(MyCart)).toBe(true);
    })

    it.skip('check if child Appbar exists', () => {
        expect(wrapper.contains(AppBar)).toBe(true);
    })
}) */