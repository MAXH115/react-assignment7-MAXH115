// components/RatingCard.jsx
import { useState } from 'react';
import styles from './RatingCard.module.css';
import RatingRow from '../components/modules/Ratingrow.jsx';
import Submit from '../components/atoms/Submit.jsx';
import star from '../../images/icon-star.svg';

function RatingCard({ setSubmitted, selected, setSelected }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={star} alt="Thankyou" />
      </div>

      <h1 className={styles.title}>How did we do?</h1>

      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>

      <RatingRow selected={selected} setSelected={setSelected} />

      <Submit
        onClick={() => setSubmitted(true)}
        disabled={selected === null}
      />
    </div>
  );
};

export default RatingCard;
