import React, { useEffect } from 'react';
import MovieListing from '../MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';


const Home = () => {

   const dispatch = useDispatch();
   const movieText = 'Marvel';
   const showText = 'Star Wars';

   useEffect(() => {
      dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchAsyncShows(showText));
   }, [dispatch]);

   return (
      <div>
         <MovieListing />
      </div>
   );
};

export default Home;