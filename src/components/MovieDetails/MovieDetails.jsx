import { useSelector } from "react-redux"

function MovieDetails() {

    const genres = useSelector(store => store.genres);
    console.log(genres)
    return (
        <div>
            <h1>Movie Details</h1>
            <img src={genres[0].movie_poster}/>
            <h1>{genres[0].movie_title}</h1>
            <h2>{genres[0].genre_name}</h2>
            <h3>{genres[0].movie_description}</h3>

        </div>
    );
 }
    export default MovieDetails