<template>
  <div class="home">
    <animal-picker
      :previous-animal="previousAnimal"
      :next-animal="nextAnimal"
      ref="animalPicker"
    ></animal-picker>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AnimalPicker from "@/components/AnimalPicker.vue";
import { IAnimal, ANIMALS } from "../constants/animals";
import { mapGetters } from "vuex";
export default Vue.extend({
  components: { AnimalPicker },
  data: () => ({
    previousAnimal: undefined as IAnimal | undefined,
    nextAnimal: undefined as IAnimal | undefined,
    animals: ANIMALS,
  }),
  computed: {
    ...mapGetters(["scroll"]),
  },
  beforeRouteEnter(to, from, next) {
    next((vm: any) => {
      document.body.scrollTop = vm.scroll.y;
      document.body.scrollLeft = vm.scroll.x;
      vm.previousAnimal =
        vm.animals &&
        vm.animals.find(
          (val: IAnimal) => val.name === from.params["animalName"],
        );
    });
  },
  beforeRouteUpdate(to, from, next) {
    next((vm: any) => {
      document.body.scrollTop = this.scroll.y;
      document.body.scrollLeft = this.scroll.x;
      vm.previousAnimal =
        vm.animals &&
        vm.animals.find(
          (val: IAnimal) => val.name === from.params["animalName"],
        );
    });
  },
  beforeRouteLeave(to, from, next) {
    if (
      document.body.scrollLeft !== this.scroll.x ||
      document.body.scrollTop !== this.scroll.y
    ) {
      this.$store.commit("storeScroll", {
        scroll: { x: document.body.scrollLeft, y: document.body.scrollTop },
      });
    }
    this.nextAnimal =
      this.animals &&
      this.animals.find((val: IAnimal) => val.name === to.params["animalName"]);
    setTimeout(async () => {
      next();
      this.nextAnimal = undefined;
    }, 500);
  },
});
</script>

<style lang="scss">
.home {
  width: 100%;
  min-height: 100%;
}
</style>
