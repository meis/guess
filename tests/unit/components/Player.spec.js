import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import players from '@/players.js';
import Player from '@/components/Player.vue';

const playerId = players.getRandomPlayerId();

describe('Player.vue', () => {
  it('can be mounted', () => {
    const wrapper = shallowMount(Player, { propsData: { playerId } });
    expect(wrapper).to.exist;
  });
});
