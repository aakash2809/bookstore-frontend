/*************************************************************************
 * @file    : confirmOrder.spec.js
 * @purpose : to test ConfirmOrder component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 **************************************************************************/

import { createLocalVue, shallowMount } from '@vue/test-utils';
import ConfirmOrder from '../../src/pages/ConfirmOrder';
import Vuetify from 'vuetify';

describe('ConfirmOrder.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);

        wrapper = shallowMount(ConfirmOrder, localVue);

    });

    it('renders a vue instance', () => {
        expect(shallowMount(ConfirmOrder).isVueInstance()).toBe(true);
    });

    it('ifComponentHasComponents_shouldReturn_object', () => {
        expect(typeof ConfirmOrder.components).toBe('object')
    })

    it('ifComponentHasName_shouldReturn_string', () => {
        expect(typeof ConfirmOrder.name).toBe('string')
    })

    it('ifComponentHasMethods_shouldReturn_object', () => {
        expect(typeof ConfirmOrder.methods).toBe('object')
    })

    // it('Calls save() when pressing save button', () => {
    //     const continueButton = wrapper.find('.continue-shopping')
    //     continueButton.trigger('click')
    //     expect(wrapper.emitted('goToHome')).toHaveBeenCalled()
    // })
});
