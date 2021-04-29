/*************************************************************************
 * @file    : snackbar.spec.js
 * @purpose : to test SnackBarNotify component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 **************************************************************************/
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import snackbar from '../../src/components/SnackBarNotify.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('snackbar.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(snackbar, {
            localVue,
        })
    });

    it('mounts and renders', () => {
        expect(wrapper.html()).toBeTruthy();
    });

    it('has data', () => {
        expect(typeof snackbar.data).toBe('function');
    });
});