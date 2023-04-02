<template>
  <Container>
    <h1>Aparment Page</h1>
  </Container>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Container from "../components/shared/Container.vue";

export default {
  name: "ApartmentPage",
  components: {
    Container,
  },
  setup() {
    const route = useRoute();
    onMounted(() => console.log(route.name));

    return { route };
  },
};
</script>

<style lang="scss" scoped>
</style>