import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
   return (
      <div className={styles.footer}>
         <div>Поиск фильмов </div>
         <div>2022, Фильмы, Иван Басов</div>
      </div>
   );
};

export default Footer;