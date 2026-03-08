import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
console.log("TOKEN:", TOKEN);
interface MoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>(BASE_URL, {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};
