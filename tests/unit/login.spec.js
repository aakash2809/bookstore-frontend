/*************************************************************************
 * @file    : login.spec.js
 * @purpose : to test Login component
 * @author  :  Aakash Rajak<aakashrajak2809@gmail.com>
 **************************************************************************/

import { createLocalVue, shallowMount } from '@vue/test-utils';
import login from '../../src/pages/login';
import Vuetify from 'vuetify';

describe('login.vue', () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuetify);

    wrapper = shallowMount(login, localVue);

  });

  it('renders a vue instance', () => {
    expect(shallowMount(login).isVueInstance()).toBe(true);
  });

  it('inGivenEmail_whenImproper_shouldEvaluatefalse', () => {
    wrapper.vm.email = "zzz@Vuetify.com";
    expect((wrapper.vm).email).toBe("zzz@Vuetify.com")
  });

  it('whenExistingClassNamePass_shouldReturn_true', () => {
    expect(wrapper.find('.button').exists()).toBe(true)
  });

  it('whenExistingIDPass_shouldReturn_true', () => {
    expect(wrapper.find('#password').exists()).toBe(true)
  });

  it('whenExistingIDPass_shouldReturn_true', () => {
    expect(wrapper.find('#email').exists()).toBe(true)
  });
});

