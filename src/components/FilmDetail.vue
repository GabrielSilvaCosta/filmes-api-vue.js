<template>
  <div v-if="film">
    <h2>{{ film.title }}</h2>
    <p>{{ film.description }}</p>
    <p>{{ film.director }}</p>
    <p>{{ film.producer }}</p>
    <p>{{ film.release_date }}</p>
    <p>{{ film.rt_score }}</p>
    <img :src="film.image" alt="Film Poster" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      film: null,
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    const response = await axios.get(
      `https://api-trybe-frontend.vercel.app/api/ghibli-animations/${id}`
    );
    this.film = response.data;
  },
};
</script>
