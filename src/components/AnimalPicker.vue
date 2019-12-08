<template>
  <v-row align="center" justify="center" class="animal-picker" no-gutters>
    <v-col>
      <v-container class="animal-grid-container">
        <div
          class="grid-item name-card-container"
          :class="animal.large ? 'large-grid-item' : ''"
          v-for="(animal, index) in animals"
          :key="animal.name + index"
        >
          <div class="name-card-height"></div>
          <name-card :animal="animal" />
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import NameCard from "./NameCard.vue";
import { ANIMALS } from "@/constants/animals";

export default Vue.extend({
  components: { NameCard },
  data: () => ({
    animals: ANIMALS,
  }),
});
</script>

<style lang="scss">
@import "~vuetify/src/styles/styles.sass";

.animal-picker {
  min-height: 100vh;
  width: 100%;
  .animal-grid-container {
    width: 90%;
    max-width: calc(100vh - 200px);
    margin-top: 100px;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: 16.66% 16.66% 16.66% 16.66% 16.66% 16.67%;
    grid-template-rows: auto;
  }
  .large-grid-item {
    grid-area: 3 / 3 / 5 / 5;
    .name-card {
      margin: 1.5%;
    }
  }
  .name-card-container {
    position: relative;
  }
  .name-card-height {
    margin-top: 100%;
  }
  @media (max-width: map-get($grid-breakpoints, "sm")) {
    .large-grid-item {
      grid-area: 8 / 1 / 10 / 3;
    }
    .animal-grid-container {
      grid-template-columns: 50% 50%;
    }
  }
}
</style>
