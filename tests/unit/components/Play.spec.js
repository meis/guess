import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Play from '@/components/Play.vue';

describe('Play.vue', () => {
  it('redirects to a random player', () => {
    let redirectedTo;
    const $router = {
      push(x) { redirectedTo = x; },
    };

    shallowMount(Play, { mocks: { $router } });
    expect(redirectedTo).to.match(/\/player\/\d+/);
  });
});
