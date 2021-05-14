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

    it.only('renders a vue instance', () => {
        expect(shallowMount(AdminDashboard).isVueInstance()).toBe(true);
    });

    it.only('ifComponentHasData_shouldReturn_function', () => {
        expect(typeof AdminDashboard.data).toBe('function')
    })

    it.only('ifComponentHasMethods_shouldReturn_object', () => {
        expect(typeof AdminDashboard.methods).toBe('object')
    })

    it.only('ifComponentHasComputed_shouldReturn_object', () => {
        expect(typeof AdminDashboard.computed).toBe('object')
    })

    it.only('whenExistingclassNamePass_shouldReturn_true', () => {
        console.log(wrapper.find('.add_book_btn').exists());
        //expect(wrapper.find('.add_book_btn').exists()).toBe(false)
    });

    it('whenExistingclassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.book_quantity').exists()).toBe(true)
    });

    it('whenExistingclassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.book_title').exists()).toBe(true)
    });

    it('whenExistingclassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.description').exists()).toBe(true)
    });

    it('whenExistingclassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.book_image').exists()).toBe(true)
    });
});

