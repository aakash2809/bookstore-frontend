/*************************************************************************
 * @file    : baseAppBar.spec.js
 * @purpose : to test BaseAppBar component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 **************************************************************************/

import { createLocalVue, shallowMount } from '@vue/test-utils';
import BaseAppBar from '../../src/components/BaseAppBar';
import Vuetify from 'vuetify';

describe('BaseAppBarr.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);

        wrapper = shallowMount(BaseAppBar, localVue);

    });

    it('renders a vue instance', () => {
        expect(shallowMount(BaseAppBar).isVueInstance()).toBe(true);
    });

    it('whenExistingclassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.main-bar').exists()).toBe(true);
    });

    it('whenExistingclassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.book-icon').exists()).toBe(true);
    });
});
