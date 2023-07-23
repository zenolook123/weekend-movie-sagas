import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieList.css';

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);



  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {

             const handleClick = () => {
                dispatch({ 
                    type: 'FETCH_GENRES', payload: movie.id
                })
              }

          return (
            <div key={movie.id}>
              <Link to={`/genre/${movie.id}`}>
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} onClick={handleClick}/>
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
