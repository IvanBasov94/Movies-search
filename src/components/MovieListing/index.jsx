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
      <div className={styles.movies__error}>
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
      <div className={styles.shows__error}>
         <h3>{shows.Error}</h3>
         <span>😕</span>
      </div>
   );


   return (
      <>
         <div className={styles.movie__list}>
            <h2>Фильмы</h2>
            <Slider {...Settings}>{renderMovies}</Slider>
         </div>
         <div className={styles.show__list}>
            <h2>Сериалы</h2>
            <Slider {...Settings}>{renderShows}</Slider>
         </div>
      </>
   );
};

export default MovieListing;