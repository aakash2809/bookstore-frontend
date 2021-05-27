/********************************************************************************************************
 * @file    : allBooks.spec.js
 * @purpose : to test AllBooks component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 *********************************************************************************************************/

import Books from '../../src/components/AllBooks';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';

describe('Books.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        wrapper = shallowMount(Books, localVue);
    });

    it('check if text Books render', () => {
        expect(wrapper.text()).toContain('Books');
    });

    it('ifComponentHasData_shouldReturn_function', () => {
        expect(typeof Books.data).toBe('function');
    });

    it('ifComponentHasBeforeMount_shouldReturn_function', () => {
        expect(typeof Books.beforeMount).toBe('function');
    });

    it('ifComponentHasMethods_shouldReturn_object', () => {
        expect(typeof Books.methods).toBe('object');
    });

    it('ifHasPrevPageMethodInsideMethods_shouldReturn_function', () => {
        expect(typeof Books.methods.prevPage).toBe('function');
    });

    it('ifHasNextPageMethodInsideMethods_shouldReturn_function', () => {
        expect(typeof Books.methods.nextPage).toBe('function');
    });

    it('whenGivenNameExist_shouldReturn_true', () => {
        expect(wrapper.contains(Books)).toBe(true);
    });

    it('ifGivenTextExistInHtml_should_Pass', () => {
        expect(wrapper.html()).toContain('Previous Page');
    });

    it('ifGivenTextExistInHtml_should_Pass', () => {
        expect(wrapper.html()).toContain('Next Page');
    });

    it('whenExistingclassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.book-layout').exists()).toBe(true);
    });

    it('whenExistingclassNamePass_shouldReturn_true', () => {
        expect(wrapper.find('.book-size').exists()).toBe(true);
    });
});