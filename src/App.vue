<template>
  <div id="app">
    <h2>{{ text }}</h2>
    <Container>
      <ApartmentFilterForm @submit="filter" class="apartments-filter" />
    </Container>
    <p v-if="!filteredApartments.length">Нічого не знайдено :(</p>
    <ApartmentsList v-else :items="filteredApartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :rating="apartment.rating"
          :price="apartment.price"
          :descr="apartment.descr"
          style="background: grey"
        />
        <!-- :imgUrl="apartment.imgUrl" -->
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import ApartmentFilterForm from "./components/apartment/ApartmentFilterForm.vue";
import Container from "./components/shared/Container.vue";
export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    Container,
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
          city: "Dnipro",
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
          city: "Kiyv",
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
          city: "Mykolaiv",
        },
      },
    ]);
    // const owner = ref({
    //   name: "Ellen",
    //   phone: "115-355-5652",
    //   email: "Tracey.Morar86@hotmail.com",
    // });
    const filters = ref({
      city: "",
      price: 0,
    });
    function filter({ city, price }) {
      filters.value.city = city;
      filters.value.price = price;
    }

    function filterByCityName(apartments) {
      if (!filters.value.city) {
        return apartments;
      }

      return apartments.filter((apartment) => {
        apartment.location.city === filters.value.city;
      });
    }
    function filterByPrice(apartments) {
      if (!filters.value.price) {
        return apartments.value;
      }

      return apartments.value.filter((apartment) => {
        apartment.price >= filters.value.price;
      });
    }
    const filteredApartments = computed(() => {
      console.log(apartments.value);
      console.log(filterByPrice(apartments));
      return filterByCityName(filterByPrice(apartments));
    });
    return {
      text,
      apartments,
      filter,
      filterByCityName,
      filterByPrice,
      filteredApartments,
    };
  },
};
</script>

<style lang='scss' scoped >
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.apartments-filter {
  margin-bottom: 40px;
}
</style>
