/*************************************************************************
 * @file    : adminDashboard.spec.js
 * @purpose : to test AdminDashboard page
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 **************************************************************************/

import { createLocalVue, shallowMount } from '@vue/test-utils';
import AdminDashboard from '../../src/pages/AdminDashboard';
import Vuetify from 'vuetify';

describe('AdminDashboard.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        wrapper = shallowMount(AdminDashboard, localVue);
    });

    it('renders a vue instance', () => {
        expect(shallowMount(AdminDashboard).isVueInstance()).toBe(true);
    });

    it('ifComponentHasData_shouldReturn_function', () => {
        expect(typeof AdminDashboard.data).toBe('function')
    })

    it('ifComponentHasMethods_shouldReturn_object', () => {
        expect(typeof AdminDashboard.methods).toBe('object')
    })

    it('ifComponentHasComputed_shouldReturn_object', () => {
        expect(typeof AdminDashboard.computed).toBe('object')
    })

    it('whenExistingclassNamePass_shouldReturn_true', () => {
        console.log(wrapper.find('.add_book_btn').exists());
    });
});

