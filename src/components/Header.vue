<template>
  <header class="header">
    <Container>
      <Logo />
    </Container>
  </header>
</template>

<script >
import Container from "./shared/Container.vue";
import Logo from "./Logo.vue";

export default {
  name: "HeaderVue",
  components: {
    Container,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: $secondary-color;
  padding: 16px 0px;
}
</style>