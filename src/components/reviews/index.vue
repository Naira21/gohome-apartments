<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Загальний рейтинг</h2>
      <div class="reviews__rating">
        <span>{{ numberOfReviews }} відгук(ів)</span>
        <StarRating :rating="averageRating" />
      </div>
    </div>
    <ReviewItem
      v-for="review in currentReviews"
      :key="review.author"
      :review="review"
    />
    <button @click="toggleReviews" class="reviews__show-more">
      {{ buttonText }}
    </button>
  </section>
</template>

<script>
import ReviewItem from "./reviews-item";
import StarRating from "../StarRating.vue";
import { computed, ref } from "vue";

export default {
  name: "ReviewsList",
  components: {
    ReviewItem,
    StarRating,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const reviewsLimit = ref(2);
    const averageRating = computed(() => {
      const totalRating = props.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return totalRating / props.reviews.length;
    });

    const numberOfReviews = computed(() => {
      return props.reviews.length;
    });

    const currentReviews = computed(() => {
      return props.reviews.slice(0, reviewsLimit.value);
    });

    const toggleReviews = () => {
      return reviewsLimit.value === props.reviews.length
        ? (reviewsLimit.value = 2)
        : (reviewsLimit.value = props.reviews.length);
    };
    const buttonText = computed(() => {
      return reviewsLimit.value === props.reviews.length
        ? "Згорнути"
        : "Читати більше";
    });

    return {
      averageRating,
      numberOfReviews,
      currentReviews,
      reviewsLimit,
      toggleReviews,
      buttonText,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.reviews {
  margin-top: 20px;
  background: $card-bg;
  padding: 0 2px;

  &__heading {
    padding: 20px 20px 10px;
  }
  &__title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__show-more {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 12px;
    font-family: inherit;
    font-size: 16px;
  }
}
</style>