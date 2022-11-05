import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';

import styles from './MovieListing.module.scss';

import MovieCard from '../MovieCard';
import { Settings } from '../../common/settings';

const MovieListing = () => {

   const movies = useSelector(getAllMovies);
   const shows = useSelector(getAllShows);
   let renderMovies, renderShows = '';

   renderMovies = (movies.Response === 'True') ? (
      movies.Search.map((movie, index) => (
         <MovieCard
            key={index}
            data={movie}
         />
      ))
   ) : (
      <div className={styles.moviesError}>
         <h3>{movies.Error}</h3>
         <span>😕</span>
      </div>
   );

   renderShows = (movies.Response === 'True') ? (
      shows.Search.map((movie, index) => (
         <MovieCard
            key={index}
            data={movie}
         />
      ))
   ) : (
      <div className={styles.showsError}>
         <h3>{shows.Error}</h3>
         <span>😕</span>
      </div>
   );


   return (
      <>
         <div className={styles.movieList}>
            <h2>Фильмы</h2>
            <Slider {...Settings}>{renderMovies}</Slider>
         </div>
         <div className={styles.showList}>
            <h2>Сериалы</h2>
            <Slider {...Settings}>{renderShows}</Slider>
         </div>
      </>
   );
};

export default MovieListing;