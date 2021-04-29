/*************************************************************************
 * @file    : forgotPassword.spec.js
 * @purpose : to test ForgotPassword component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 **************************************************************************/

import { createLocalVue, shallowMount } from '@vue/test-utils';
import ForgotPassword from '../../src/pages/ForgotPassword';
import Vuetify from 'vuetify';

describe('ForgotPassword.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);

        wrapper = shallowMount(ForgotPassword, localVue);

    });

    it('renders a vue instance', () => {
        expect(shallowMount(ForgotPassword).isVueInstance()).toBe(true);
    });

    it('inGivenEmail_whenImproper_shouldEvaluatefalse', () => {
        wrapper.vm.email = "zzz@Vuetify.com";
        expect((wrapper.vm).email).toBe("zzz@Vuetify.com");
    });

    it('whenExistingClassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.main-card').exists()).toBe(true);
    });

    it('whenExistingClassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.display-card').exists()).toBe(true);
    });
});

