<template>
  <div class="film-list">
    <h2 class="film-list-title">Studio Ghibli Films</h2>
    <ul class="film-list-ul">
      <li
        class="film-list-li"
        v-for="film in films"
        :key="film.id"
        @click="showDetails(film.id)"
      >
        <div class="film-card">
          <img class="film-list-img" :src="film.image" :alt="film.title" />
          <div class="film-details">
            <h3 class="film-title">{{ film.title }}</h3>
            <p class="film-description">{{ film.description }}</p>
            <div class="film-meta">
              <p><strong>Director:</strong> {{ film.director }}</p>
              <p><strong>Release Date:</strong> {{ film.release_date }}</p>
              <p><strong>Rating:</strong> {{ film.rt_score }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      films: [],
    };
  },
  methods: {
    async fetchFilms() {
      const response = await axios.get(
        "https://api-trybe-frontend.vercel.app/api/ghibli-animations"
      );
      this.films = response.data;
    },
    showDetails(id) {
      this.$router.push({ name: "film-detail", params: { id } });
    },
  },
  mounted() {
    this.fetchFilms();
  },
};
</script>

<style>
.film-list {
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.5;
}

.film-list-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-decoration: underline;
  text-decoration-color: #ccc;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
  text-decoration-style: wavy;
  text-decoration-line: underline;
  text-decoration-skip-ink: none;
  text-underline-position: under;
  text-decoration-color: #007bff;
  text-decoration-style: wavy;
  text-decoration-line: underline;
  text-decoration-skip-ink: none;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
}

.film-list-ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-items: center;
}

.film-list-li {
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 100%;
}

.film-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  overflow: hidden;
}

.film-list-img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 10px;
}

.film-details {
  padding: 10px;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
}

.film-title {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
  text-decoration: underline;
  text-decoration-color: #ccc;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
  text-decoration-style: wavy;
  text-decoration-line: underline;
  text-decoration-skip-ink: none;
  text-underline-position: under;
  text-decoration-color: #007bff;
  text-decoration-style: wavy;
  text-decoration-line: underline;
  text-decoration-skip-ink: none;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
}

.film-description {
  margin: 10px 0;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
}

.film-meta {
  font-size: 12px;
  color: #666;
  margin-top: 10px;
}

.film-meta p {
  margin: 5px 0;
}

.film-meta strong {
  font-weight: bold;
}

.film-list-li:hover {
  transform: scale(1.05);
}

.film-list-li:hover .film-card {
  transform: scale(1.05);
}

.film-list-li:hover .film-details {
  background-color: #f5f5f5;
}

.film-list-li:hover .film-title {
  text-decoration: underline;
  text-decoration-color: #007bff;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
  text-decoration-style: wavy;
  text-decoration-line: underline;
  text-decoration-skip-ink: none;
  text-underline-position: under;
  text-decoration-color: #007bff;
  text-decoration-style: wavy;
  text-decoration-line: underline;
  text-decoration-skip-ink: none;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
}
</style>
