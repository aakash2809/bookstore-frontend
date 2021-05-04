/*************************************************************************
 * @file    : searchResult.spec.js
 * @purpose : to test SearchResult component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 **************************************************************************/

import { createLocalVue, shallowMount } from '@vue/test-utils';
import SearchResult from '../../src/pages/SearchResult';
import Vuetify from 'vuetify';

describe('DashBoard.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);

        wrapper = shallowMount(SearchResult, localVue);

    });

    it('renders a vue instance', () => {
        expect(shallowMount(SearchResult).isVueInstance()).toBe(true);
    });

    it('whenExistingIdPass_shouldReturn_true', () => {
        expect(wrapper.find('#app').exists()).toBe(true)
    });
});

