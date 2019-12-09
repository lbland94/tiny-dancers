<template>
  <div class="v-animal">
    <v-btn class="back-btn"
           icon
           to="/">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-row class="v-animal-container"
           align="center"
           justify="center"
           no-gutters
           :style="backgroundStyle">
      <div class="dancing-animal-container">
        <v-img :src="img"
               class="dancing-animal" />
      </div>
    </v-row>
  </div>
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
    backgroundStyle: "background-color: #E53935;",
  }),
  computed: {
    animal(): IAnimal | undefined {
      return this.animals.find(val => val.name === this.animalName);
    },
    img(): string {
      if (this.animal) {
        const imgFolder = `img/animals/${this.animal.name}/`;
        const imgFile =
          this.animal.images[
            Math.floor(Math.random() * this.animal.images.length)
          ] || "";
        return imgFolder + imgFile;
      }
      return "";
    },
  },
  mounted() {
    setTimeout(() => {
      this.backgroundStyle = "";
    }, 0);
  },
});
</script>

<style lang="scss">
.v-animal {
  &,
  .v-animal-container {
    min-height: 100vh;
    width: 100%;
    transition: 0.2s background-color ease-in-out;
  }
  .back-btn {
    position: fixed;
    top: 10px;
    left: 10px;
  }
  .dancing-animal-container {
    width: 10%;
    max-width: 150px;
    min-width: 100px;
  }
}
</style>
