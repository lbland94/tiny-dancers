<template>
  <v-row class="v-animal" align="center" justify="center" no-gutters>
    <v-col> </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { ANIMALS, IAnimal } from "@/constants/animals";
export default Vue.extend({
  props: {
    animalName: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    animals: ANIMALS,
  }),
  computed: {
    animal(): IAnimal | undefined {
      return this.animals.find(val => val.name === this.animalName);
    },
  },
});
</script>

<style lang="scss">
.v-animal {
  min-height: 100vh;
  width: 100%;
}
</style>
