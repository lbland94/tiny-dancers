<template>
  <div class="home">
    <animal-picker></animal-picker>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AnimalPicker from "@/components/AnimalPicker.vue";
export default Vue.extend({
  components: { AnimalPicker },
});
</script>

<style lang="scss">
.home {
  width: 100%;
  min-height: 100%;
}
</style>
