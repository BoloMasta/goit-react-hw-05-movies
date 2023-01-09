import axios from 'axios';

const apiKey = '92be59e0090ddfe5570b8756c403476a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class FetchApiMovies {
  async fetchTrendingMovies() {
    try {
      const { data } = await axios.get(`/trending/movie/day?api_key=${apiKey}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMoviesByQuery(query) {
    try {
      const { data } = await axios.get(
        `/search/movie?api_key=${apiKey}&query=${query}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovieDetails(movieId) {
    try {
      const { data } = await axios.get(`/movie/${movieId}?api_key=${apiKey}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovieCast(movieId) {
    try {
      const { data } = await axios.get(
        `/movie/${movieId}/credits?api_key=${apiKey}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovieReviews(movieId) {
    try {
      const { data } = await axios.get(
        `/movie/${movieId}/reviews?api_key=${apiKey}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FetchApiMovies();
