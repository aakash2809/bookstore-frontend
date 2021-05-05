/********************************************************************************************************
 * @file    : filteredBooksForSearch.spec.js
 * @purpose : to test FilteredBooksForSearch.spec component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 *********************************************************************************************************/

import Books from "../../src/components/FilteredBooksForSearch";
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';

describe('Books.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        wrapper = shallowMount(Books, localVue);
    });

    it('renders a vue instance', () => {
        expect(shallowMount(Books).isVueInstance()).toBe(true);
    });
    it('check if text Books render', () => {
        console.log(wrapper.text())
        expect(wrapper.text()).toContain('Books')
    })

    it('check if child Books exists', () => {
        expect(wrapper.contains(Books)).toBe(true);
    })

    it('ifComponentHasName_shouldReturn_string', () => {
        expect(typeof Books.name).toBe('string')
    })

    it('ifComponentHasMethods_shouldReturn_object', () => {
        expect(typeof Books.methods).toBe('object')
    })

})