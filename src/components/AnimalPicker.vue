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
          <router-link :to="'/' + animal.name">
            <name-card
              :animal="animal"
              :ref="animal.name"
              v-if="animal !== selectedAnimal"
            />
          </router-link>
        </div>
      </v-container>
    </v-col>
    <name-card
      v-if="selectedAnimal"
      :animal="selectedAnimal"
      ref="selectedAnimalEl"
      class="transition-card"
      :class="selectedAnimalClass"
      :style="selectedAnimalStyle"
    ></name-card>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import NameCard from "./NameCard.vue";
import { ANIMALS, IAnimal } from "@/constants/animals";

export default Vue.extend({
  components: { NameCard },
  props: {
    previousAnimal: Object as () => IAnimal,
    nextAnimal: Object as () => IAnimal,
  },
  data: () => ({
    animals: ANIMALS,
    selectedAnimal: undefined as IAnimal | undefined,
    selectedAnimalStyle: "",
    selectedAnimalClass: "",
  }),
  methods: {
    async selectAnimal(animal: IAnimal) {
      const nameCardCom = this.$refs[animal.name] as Vue[];
      if (
        nameCardCom &&
        nameCardCom[0] instanceof Vue &&
        nameCardCom[0].$el instanceof HTMLElement
      ) {
        const nameEl = nameCardCom[0].$el;
        const boundingClientRect = nameEl.getBoundingClientRect();
        this.selectedAnimalStyle =
          `width: ${boundingClientRect.width}px; height: ${boundingClientRect.height}px; ` +
          `top: ${boundingClientRect.top}px; left: ${boundingClientRect.left}px; ` +
          `transform: translate(0, 0) rotateZ(0deg);`;
        this.selectedAnimal = animal;
      }
      await this.$nextTick();
      this.selectedAnimalStyle = "";
      setTimeout(() => {
        this.selectedAnimalClass = "hide-content";
      }, 150);
      setTimeout(async () => {
        this.selectedAnimal = undefined;
        this.selectedAnimalClass = "";
      }, 500);
    },
  },
  mounted() {
    (async () => {
      await this.$nextTick();
      if (this.previousAnimal) {
        const nameCardCom = this.$refs[this.previousAnimal.name] as Vue[];
        if (
          nameCardCom &&
          nameCardCom[0] instanceof Vue &&
          nameCardCom[0].$el instanceof HTMLElement
        ) {
          const nameEl = nameCardCom[0].$el;
          const boundingClientRect = nameEl.getBoundingClientRect();
          await this.$nextTick();

          this.selectedAnimal = this.previousAnimal;
          this.selectedAnimalClass = "hide-content";
          await this.$nextTick();

          this.selectedAnimalStyle =
            `width: ${boundingClientRect.width}px; height: ${boundingClientRect.height}px; ` +
            `top: ${boundingClientRect.top}px; left: ${boundingClientRect.left}px; ` +
            `transform: translate(0, 0) rotateZ(0deg); transition: 0.5s all;`;
          setTimeout(() => {
            this.selectedAnimalClass = "";
          }, 350);
          setTimeout(() => {
            this.selectedAnimal = undefined;
          }, 500);
        }
      }
    })();
  },
  watch: {
    nextAnimal(animal: IAnimal | undefined) {
      if (animal) {
        this.selectAnimal(animal);
      }
    },
  },
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
  .transition-card {
    width: 100vw;
    height: 100vh;
    position: fixed !important;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%) rotateY(180deg);
    transition: 0.5s all;
    margin: 0;
  }
  .hide-content {
    * {
      visibility: hidden;
    }
  }
  @media (max-width: map-get($grid-breakpoints, "sm")) {
    .large-grid-item {
      grid-area: 8 / 1 / 10 / 3;
    }
    .animal-grid-container {
      grid-template-columns: 50% 50%;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
