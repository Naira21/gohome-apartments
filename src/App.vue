<template>
  <div :id="$style.app">
    <h2>{{ amountOfClicks() }}</h2>
    <ButtonVue @click="increment">Click</ButtonVue>
  </div>
</template>

<script>
import ButtonVue from "./components/Button.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: {
    ButtonVue,
  },
  setup() {
    const allClicks = ref(0);
    function increment() {
      allClicks.value += 1;
    }
    function amountOfClicks() {
      return `Amount of clicks ${allClicks.value}`;
    }
    return { allClicks, amountOfClicks, increment };
  },
};
</script>

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
