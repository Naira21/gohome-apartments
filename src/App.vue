<template>
  <div :id="$style.app">
    <ApartmentsList :items="apartment" />
  </div>
</template>

<script>
import { ref } from "vue";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";

export default {
  name: "App",
  components: {
    ApartmentsList,
  },
  setup() {
    const apartment = ref([
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
    // const allClicks = ref(0);
    // function increment() {
    //   allClicks.value += 1;
    // }
    // function amountOfClicks() {
    //   return `Amount of clicks ${allClicks.value}`;
    // }
    // return { allClicks, amountOfClicks, increment };
    return { owner, apartment };
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
</style>
