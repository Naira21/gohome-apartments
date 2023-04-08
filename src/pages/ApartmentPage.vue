<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__content">
        <ApartmentInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <ReviewsList :reviews="reviewsList" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import Container from "../components/shared/Container.vue";
import ApartmentInfo from "@/components/apartment/ApartmentInfo.vue";
import ApartmentsOwner from "@/components/apartment/ApartmentsOwner.vue";
import ReviewsList from "../components/reviews/index.vue";
import reviews from "../components/reviews/reviews.json";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentInfo,
    ApartmentsOwner,
    ReviewsList,
  },
  setup() {
    const reviewsList = computed(() => {
      return reviews;
    });
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
        owner: {
          name: "Bobbi",
          phone: "582-740-2926",
          email: "Pete_Carter53@hotmail.com",
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
        owner: {
          name: "Bobbi",
          phone: "582-740-2926",
          email: "Pete_Carter53@hotmail.com",
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
        owner: {
          name: "Bobbi",
          phone: "582-740-2926",
          email: "Pete_Carter53@hotmail.com",
        },
      },
    ]);

    const route = useRoute();
    const apartment = computed(() => {
      return apartments.value.find(
        (apartment) => apartment.id === route.params.id
      );
    });

    return { route, apartments, apartment, reviewsList };
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__owner {
    min-width: 350px;
    margin-left: 30px;
  }
}
</style>