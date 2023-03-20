<template>
  <select v-bind="$attrs" v-on="listeners" class="custom-select">
    <option v-for="item in formatedItems" :value="item.value" :key="item.label">
      {{ item.label }}
    </option>
  </select>
</template>

<script>
import { computed } from "@vue/runtime-core";

export default {
  name: "CustomSelect",
  emits: ["update:modelValue"],
  inheritAttrs: true,
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
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
    const formatedItems = computed(() => {
      return props.items.map((item) => {
        return typeof item === "object"
          ? item
          : {
              value: item,
              label: item,
            };
      });
    });
    return { listeners, formatedItems };
  },
};
</script>

<style lang='scss' scoped>
@import "../../assets/scss/variables";
.custom-select {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;
  min-width: 220px;
}
</style>