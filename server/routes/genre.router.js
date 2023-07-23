const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  const movieId = req.params.id;

  const query = `
    SELECT movies.id AS movie_id, 
           movies.title AS movie_title, 
           genres.id AS genre_id, 
           genres.name AS genre_name
    FROM movies
    INNER JOIN movies_genres ON movies.id = movies_genres.movie_id
    INNER JOIN genres ON movies_genres.genre_id = genres.id
    WHERE movies.id = $1;
  `;

  pool.query(query, [movieId])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get movie details', err);
      res.sendStatus(500);
    });
});


module.exports = router;