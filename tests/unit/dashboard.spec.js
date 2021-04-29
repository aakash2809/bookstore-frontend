/*************************************************************************
 * @file    : dashBoard.spec.js
 * @purpose : to test DashBoard component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 **************************************************************************/

import { createLocalVue, shallowMount } from '@vue/test-utils';
import DashBoard from '../../src/pages/DashBoard';
import Vuetify from 'vuetify';

describe('DashBoard.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);

        wrapper = shallowMount(DashBoard, localVue);

    });

    it('renders a vue instance', () => {
        expect(shallowMount(DashBoard).isVueInstance()).toBe(true);
    });

    it('whenExistingIdPass_shouldReturn_true', () => {
        expect(wrapper.find('#app').exists()).toBe(true)
    });
});

