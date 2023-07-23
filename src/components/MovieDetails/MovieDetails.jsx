import { useSelector } from "react-redux"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function MovieDetails() {

    const genres = useSelector(store => store.genres);
    
    return (
        <div>
            <Link to={`/`}>Back to Home</Link>
            <h1>Movie Details</h1>
            <img src={genres[0].movie_poster}/>
            <h1>{genres[0].movie_title}</h1>
            <h2>
                {genres.map((movie) => (
                    <span key={movie.genre_name}>{movie.genre_name}<br></br> </span>
                ))}
            </h2>
            <h3>{genres[0].movie_description}</h3>
        </div>
    );
 }
    export default MovieDetails