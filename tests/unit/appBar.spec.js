/*************************************************************************
 * @file    : appBar.spec.js
 * @purpose : to test AppBar component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 **************************************************************************/

import { createLocalVue, shallowMount } from '@vue/test-utils';
import AppBar from '../../src/components/AppBar';
import Vuetify from 'vuetify';

describe('AppBar.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);

        wrapper = shallowMount(AppBar, localVue);

    });

    it('renders a vue instance', () => {
        expect(shallowMount(AppBar).isVueInstance()).toBe(true);
    });

    it('whenExistingclassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.main-bar').exists()).toBe(true)
    });

    it('whenExistingclassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.book-icon').exists()).toBe(true)
    });

    it('whenExistingIdPass_shouldReturn_true', () => {
        expect(wrapper.find('#top-search-bar').exists()).toBe(true)
    });
});
