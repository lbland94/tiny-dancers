<template>
  <div class="v-animal">
    <v-btn class="back-btn"
           icon
           to="/">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn class="refresh-btn"
           icon
           v-if="imageCount > 1"
           @click.prevent="newAnimal">
      <v-icon>mdi-refresh</v-icon>
    </v-btn>
    <v-row class="v-animal-container"
           align="center"
           justify="center"
           no-gutters
           :style="backgroundStyle">
      <div class="dancing-animal-container" :key="randomImg.path">
        <v-img :src="img"
               :style="randomImg.style"
               class="dancing-animal" />
      </div>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ANIMALS, IAnimal, IAnimalImage } from "@/constants/animals";
export default Vue.extend({
  props: {
    animalName: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    animals: ANIMALS,
    baseUrl: process.env.BASE_URL || "",
    backgroundStyle: "background-color: #E53935;",
    selectedAnimal: -1,
  }),
  computed: {
    animal(): IAnimal | undefined {
      return this.animals.find(val => val.name === this.animalName);
    },
    randomImg(): IAnimalImage {
      return this.animal && this.animal.images[this.selectedAnimal] || {path: ""};
    },
    imageCount(): number {
      return this.animal && this.animal.images.length || 0;
    },
    img(): string {
      if (this.animal) {
        const imgFolder = `${this.baseUrl}img/animals/${this.animal.name}/`;
        return imgFolder + this.randomImg.path;
      }
      return "";
    },
  },
  methods: {
    newAnimal() {
      let newAnimal = Math.floor(Math.random() * this.imageCount);
      let tries = 0;
      while (newAnimal === this.selectedAnimal && tries < 10) {
        newAnimal = Math.floor(Math.random() * this.imageCount);
        tries++;
      };
      this.selectedAnimal = newAnimal || 0;
    },
  },
  mounted() {
    this.newAnimal();
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
  .refresh-btn {
    position: fixed;
    top: 10px;
    right: 10px;
  }
  .dancing-animal-container {
    width: 10%;
    max-width: 150px;
    min-width: 100px;
  }
}
</style>
