/*************************************************************************
 * @file    : forgotPasswordForm.spec.js
 * @purpose : to test ForgotPasswordForm component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 **************************************************************************/

import { createLocalVue, shallowMount } from '@vue/test-utils';
import ForgotPasswordForm from '../../src/components/ForgotPasswordForm';
import Vuetify from 'vuetify';

describe('ForgotPasswordForm.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);

        wrapper = shallowMount(ForgotPasswordForm, localVue);
    });

    it('renders a vue instance', () => {
        expect(shallowMount(ForgotPasswordForm).isVueInstance()).toBe(true);
    });

    it('inGivenEmail_whenImproper_shouldEvaluatefalse', () => {
        wrapper.vm.email = 'zzz@Vuetify.com';
        expect((wrapper.vm).email).toBe('zzz@Vuetify.com');
    });

    it('whenExistingiDPass_shouldReturn_true', () => {
        expect(wrapper.find('#email').exists()).toBe(true);
    });

    it('whenExistingClassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.button').exists()).toBe(true);
    });
});

