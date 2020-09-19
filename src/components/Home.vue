<template>
  <span>
    <v-img
      src="background.jpg"
    ></v-img>
    <v-card-actions>
      <router-link to="/play">
        <v-btn text>Play!</v-btn>
      </router-link>
    </v-card-actions>
  </span>
</template>

<script>
export default {
  name: 'Home',
};
</script>
