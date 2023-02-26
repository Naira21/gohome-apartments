<template>
  <div :id="$style.app">
    <h2>Text: {{ text }}</h2>
    <CustomInput class="check-style" v-model="text" />
    <ApartmentsList :items="apartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :rating="apartment.rating"
          :price="apartment.price"
          :descr="apartment.descr"
          style="background: grey"
          @click="handleClick"
        />
        <!-- :imgUrl="apartment.imgUrl" -->
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import { ref } from "vue";
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import CustomInput from "./components/shared/CustomInput.vue";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentsItem,
    CustomInput,
  },
  setup() {
    // const apartments = [];
    const text = ref("");
    const apartments = ref([
      {
        id: "5f05c9dad2c9bc0f773444bc",
        title:
          "Aut qui adipisci distinctio maiores molestiae sit est inventore vero.",
        descr:
          "Non perferendis rerum a in nisi exercitationem dolorum perferendis. Eligendi sit error sed a. Facere maiores sit adipisci sequi eveniet. Qui est voluptatum maiores eos qui vitae.",
        price: 2032,
        rating: 5,
        location: {
          city: "Kherson",
        },
      },
      {
        id: "5f05c9dad2c9bc0f773444bc",
        title:
          "Aut qui adipisci distinctio maiores molestiae sit est inventore vero.",
        descr:
          "Non perferendis rerum a in nisi exercitationem dolorum perferendis. Eligendi sit error sed a. Facere maiores sit adipisci sequi eveniet. Qui est voluptatum maiores eos qui vitae.",
        price: 2032,
        rating: 1,
        location: {
          city: "Kherson",
        },
      },
      {
        id: "5f05c9dad2c9bc0f773444bc",
        title:
          "Aut qui adipisci distinctio maiores molestiae sit est inventore vero.",
        descr:
          "Non perferendis rerum a in nisi exercitationem dolorum perferendis. Eligendi sit error sed a. Facere maiores sit adipisci sequi eveniet. Qui est voluptatum maiores eos qui vitae.",
        price: 2032,
        rating: 4.7,
        location: {
          city: "Kherson",
        },
      },
    ]);
    const owner = ref({
      name: "Ellen",
      phone: "115-355-5652",
      email: "Tracey.Morar86@hotmail.com",
    });

    function handleClick() {
      console.log("handleClock");
    }
    function onInput() {
      console.log("onInput in App");
    }
    return {
      text,
      owner,
      apartments,
      handleClick,

      onInput,
    };
  },
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.check-style {
  background: red;
  font-weight: bold;
}
</style>
