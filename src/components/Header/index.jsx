import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Header.module.scss';
import userPng from '../../assets/img/user.png';
import { FaSearch } from 'react-icons/fa';


import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';



const Header = () => {

   const [term, setTerm] = useState('');
   const dispatch = useDispatch();

   const submitHandler = (event) => {
      event.preventDefault();
      if (term === '') return alert('Пожалуйста, введите поисковый запрос');
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
      setTerm('');
   };

   return (
      <div className={styles.header}>
         <div className={styles.logo}>
            <Link to='/'>Поиск фильмов</Link>
         </div>
         <div className={styles.searchBar}>
            <form onSubmit={submitHandler}>
               <input
                  type="text"
                  value={term}
                  placeholder="Поиск фильмов или сериалов (на английском)..."
                  onChange={(event) => {
                     setTerm(event.target.value);
                  }}
               />
               <button type='submit'><FaSearch className={styles.faSearch}/></button>
            </form>
         </div>
         <div className={styles.userImage}>
            <img src={userPng} alt={styles.user} />
         </div>
      </div>
   );
};

export default Header;