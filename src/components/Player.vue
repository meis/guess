<template>
  <span>
    <v-card-text>
      <v-list-item
        v-for="(team, index) in teams"
        :key="index"
        :complete="false"
        :step="index + 1"
      >
        <v-list-item-icon>
          <v-chip primary>{{ index + 1 }}</v-chip>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ team }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>

    <v-divider />

    <v-card-text>
      <v-autocomplete
        v-model="selectedPlayer"
        :items="playersList"
        placeholder="Player Name"
        :prepend-icon="icon"
        :success="goodGuess"
        return-object
      ></v-autocomplete>
  </v-card-text>
  </span>
</template>

<script>
import players from '@/players';

export default {
  name: 'Player',
  props: {
    playerId: {
      Type: Number,
      required: true,
    },
  },
  data() {
    return {
      selectedPlayer: undefined,
      playersList: players.list.map((p) => ({ text: p.name, value: p })),
    };
  },
  computed: {
    teams() { return players.getPlayerTeams(this.playerId); },
    goodGuess() {
      if (!this.selectedPlayer) return false;
      return players.checkPlayerId(this.selectedPlayer.value, this.playerId);
    },
    icon() {
      return this.goodGuess ? 'mdi-thumb-up' : 'mdi-thumb-down';
    },
  },
};
</script>
