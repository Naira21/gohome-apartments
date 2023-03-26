<template>
  <form @submit.prevent="handleSubmit" class="form">
    <CustomSelect :items="cities" v-model="city" class="form__select" />
    <CustomInput v-model="price" placeholder="Ціна, від" />
    <SubmitButton class="form__submit" type="submit">Підбір житла</SubmitButton>
  </form>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
import CustomInput from "../shared/CustomInput.vue";
import CustomSelect from "../shared/CustomSelect.vue";
import SubmitButton from "../shared/Button.vue";

export default {
  name: "ApartmentFilterForm",
  components: {
    CustomInput,
    CustomSelect,
    SubmitButton,
  },
  emits: ["update:modelValue", "submit"],
  inheritAttrs: true,
  setup(props, { attrs, emit }) {
    const price = ref("");
    const city = ref("");
    const cities = computed(() => {
      return [
        { value: "", label: "Місто", selected: true },
        "Kiyv",
        "Dnipro",
        "Mykolaiv",
      ];
    });
    const listeners = computed(() => {
      return {
        ...attrs,
        input: (event) => {
          emit("update:modelValue", event.target.value);
        },
      };
    });
    const handleSubmit = () => {
      emit("submit", { city: city, price: price });
    };
    return { price, city, cities, listeners, handleSubmit };
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

.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>