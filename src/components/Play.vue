<template>
  <span>Choosing a random player</span>
</template>

<script>
import players from '@/players';

export default {
  name: 'Play',
  data() {
    return {
      playerId: players.getRandomPlayerId(),
    };
  },
  created() {
    this.$router.push(`/player/${this.playerId}`);
  },
};
</script>
