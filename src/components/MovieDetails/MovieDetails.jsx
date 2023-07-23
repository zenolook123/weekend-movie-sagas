import { useSelector } from "react-redux"

function MovieDetails() {

    const genres = useSelector(store => store.genres);
    console.log(genres)
    return (
        <div>
            <h1>Movie Details</h1>
            <h1>{genres.movie_title}</h1>
  
            {genres.map((movie) => {
                return (
                    <div key={movie.movie_id}>
                     
                        <h3>{movie.genre_name}</h3>
                    </div>
                );
            })}
        </div>
    );
 }
    export default MovieDetails