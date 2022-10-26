import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
   fetchAsyncMovieOrShowDetail,
   getSelectedMovieOrShow,
   removeSelectedMovieOrShow,
} from '../../features/movies/movieSlice';

import styles from './MovieDetail.module.scss';
import { FaStar, FaThumbsUp, FaFilm, FaCalendar } from "react-icons/fa";

const MovieDetail = () => {

   const { imdbID } = useParams();
   const dispatch = useDispatch();
   const data = useSelector(getSelectedMovieOrShow);

   useEffect(() => {
      dispatch(fetchAsyncMovieOrShowDetail(imdbID));
      return () => {
         dispatch(removeSelectedMovieOrShow());
      }
   }, [dispatch, imdbID]);

   return (
      <div className={styles.movie__section}>
         {Object.keys(data).length === 0 ?
            (<div className={styles.movie__loading}>...Загрузка</div>) :
            (<>
               <div className={styles.section__left}>
                  <div className={styles.movie__title}>{data.Title}</div>
                  <div className={styles.movie__rating}>
                     <span>
                        Рейтинг <FaStar className={styles.fa__star} /> : {data.imdbRating}
                     </span>
                     <span>
                        Голосов <FaThumbsUp className={styles.fa__thumbs__up} /> : {data.imdbVotes}
                     </span>
                     <span>
                        Продолжительность <FaFilm className={styles.fa__film} /> : {data.Runtime}
                     </span>
                     <span>
                        Год <FaCalendar className={styles.fa__calendar} /> : {data.Year}
                     </span>
                  </div>
                  <div className={styles.movie__plot}>{data.Plot}</div>
                  <div className={styles.movie__info}>
                     <div>
                        <span>Режиссер</span>
                        <span>{data.Director}</span>
                     </div>
                     <div>
                        <span>В ролях</span>
                        <span>{data.Actors}</span>
                     </div>
                     <div>
                        <span>Жанр</span>
                        <span>{data.Genre}</span>
                     </div>
                     <div>
                        <span>Языки</span>
                        <span>{data.Language}</span>
                     </div>
                     <div>
                        <span>Награды</span>
                        <span>{data.Awards}</span>
                     </div>
                  </div>
               </div>
               <div className={styles.section__right}>
                  <img src={data.Poster} alt={data.Title} />
               </div>
            </>
            )}
      </div >
   );
};

export default MovieDetail;