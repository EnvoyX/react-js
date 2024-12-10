import { useEffect, useState } from 'react';
import { getMovieList, searchMovie } from './api';
import './App.css';

// Function Expression

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => setPopularMovies(result));
  }, []);

  const PopularMovie = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{movie.title}</div>
          <img
            src={`${import.meta.env.VITE_BASEIMGURL}/${movie.poster_path}`}
            alt=""
            className="movie-image"
          />
          <div className="movie-date">Release: {movie.release_date}</div>
          <div className="movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
      // console.log({ query: query });
    }
  };

  // console.log({ popularMovies: popularMovies });

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>ENVOY MOVIE MANIA</h1>
          <input
            type="text"
            placeholder="search movie...."
            className="movie-search"
            // Binding the search function to onChange attribute.
            onChange={({ target }) => search(target.value)}
          />
          <div className="movie-container">
            <PopularMovie></PopularMovie>
          </div>
        </header>
      </div>
    </>
  );
};

export default App;
