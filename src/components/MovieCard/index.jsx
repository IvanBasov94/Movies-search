import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MovieCard.module.scss';

const MovieCard = ({ data }) => {

   return (
      <div className={styles.card__item}>
         <Link to={`/movie/${data.imdbID}`}>
            <div>
               <div className={styles.card__top}>
                  <img src={data.Poster} alt={data.Title} />
               </div>
               <div className={styles.card__bottom}>
                  <div className={styles.card__info}>
                     <h4>{data.Title}</h4>
                     <p>{data.Year}</p>
                  </div>
               </div>
            </div>
         </Link>
      </div >
   );
};

export default MovieCard;