/*************************************************************************
 * @file    : register.spec.js
 * @purpose : to test Register component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 **************************************************************************/
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Register from '../../src/pages/Register';
import Vuetify from 'vuetify';

/**
 * @description test cases for resgister.vue
 */
describe('Register.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        wrapper = shallowMount(Register, localVue);
    });

    it('renders a vue instance', () => {
        expect(shallowMount(Register).isVueInstance()).toBe(true);
    });

    it('whenExistingClassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.button').exists()).toBe(true);
    });

    it('whenExistingIDPass_shouldReturn_true', () => {
        expect(wrapper.find('#first-name').exists()).toBe(true);
    });

    it('whenExistingIDPass_shouldReturn_true', () => {
        expect(wrapper.find('#last-name').exists()).toBe(true);
    });

    it('whenExistingIDPass_shouldReturn_true', () => {
        expect(wrapper.find('#email').exists()).toBe(true);
    });

    it('whenExistingIDPass_shouldReturn_true', () => {
        expect(wrapper.find('#password').exists()).toBe(true);
    });

    it('whenExistingIDPass_shouldReturn_true', () => {
        expect(wrapper.find('#cpassword').exists()).toBe(true);
    });
});


