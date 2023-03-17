<template>
  <form action="">
    <CustomSelect />
    <CustomInput />
    <SubmitButton />
  </form>
</template>

<script>
import { computed } from "@vue/runtime-core";
import CustomInput from "../shared/CustomInput.vue";
import CustomSelect from "../shared/CustomSelect.vue";
import SubmitButton from "../shared/Button";

export default {
  name: "ApartmentFilterForm",
  components: {
    CustomInput,
    CustomSelect,
    SubmitButton,
  },
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