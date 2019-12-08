<template>
  <v-card
    :color="animal.name !== 'spacer' ? 'red darken-1' : ''"
    ripple
    class="name-card"
    dark
    hover
    tile
    :to="'/' + animal.name"
  >
    <v-row
      align="center"
      justify="center"
      class="text-center"
      style="height: 100%;"
      no-gutters
    >
      <v-col>
        <span class="body-1">
          {{ animal.name }}
        </span>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    animal: Object,
  },
});
</script>

<style lang="scss">
.name-card {
  position: absolute !important;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: 3%;
  user-select: none;
  cursor: pointer;
}
</style>
