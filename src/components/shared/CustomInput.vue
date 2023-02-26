<template>
  <input class="custom-input" v-bind="$attrs" v-on="listeners" />
</template>

<script>
import { computed } from "@vue/runtime-core";

export default {
  name: "CustomInput",
  emits: ["update:modelValue"],
  inheritAttrs: true,
  setup(props, { attrs, emit }) {
    const listeners = computed(() => {
      return {
        ...attrs,
        input: (event) => {
          console.log(event.target.value);

          emit("update:modelValue", event.target.value);
        },
      };
    });
    return { listeners };
  },
};
</script>

<style lang='scss' scoped>
@import "../../assets/scss/variables";
.custom-input {
  min-height: 40px;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
}
</style>