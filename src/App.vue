<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
html {
  overflow-y: auto !important;
}
body,
html {
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
