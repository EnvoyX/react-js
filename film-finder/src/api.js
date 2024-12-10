import axios from 'axios';

const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = import.meta.env.VITE_BASEURL;

console.log(`${baseUrl}/movie/popular?api_key=${apiKey}`);

export const getMovieList = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
  );
  // console.log({ movieList: movie });
  return movie.data.results;
};

export const searchMovie = async (query) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${query}&page=1&api_key=${apiKey}`
  );
  // console.log(`Search data:`);
  // console.log(search);
  return search.data;
};
