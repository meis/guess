<template>
  <v-app>
    <v-main>
       <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-list-item>
                <v-list-item-icon>
                  <router-link to="/">
                    <v-icon>mdi-soccer</v-icon>
                  </router-link>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="headline">
                    Guess
                  </v-list-item-title>
                </v-list-item-content>
                <v-spacer></v-spacer>

                <router-link
                  v-if="!homePage"
                  to="/play"
                >
                  <v-btn icon>
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </router-link>
              </v-list-item>

              <router-view />
            </v-card>
          </v-col>
        </v-row>
       </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    homePage() {
      return this.$route.name === 'Home';
    },
  },
};
</script>
