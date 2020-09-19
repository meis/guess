import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Home from '@/components/Home.vue';

describe('Home.vue', () => {
  it('can be mounted', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper).to.exist;
  });
});
