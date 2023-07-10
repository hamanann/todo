import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to='/' replace className={styles.linkButton}>
        Return to Home
      </Link>
    </div>
  );
}
