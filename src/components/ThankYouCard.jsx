// components/ThankYouCard.jsx
import styles from './ThankYouCard.module.css';
import Response from './atoms/Respones.jsx';
import ThankYouimg from '../../images/illustration-thank-you.svg';

export default function ThankYouCard({ selected }) {
  return (
    <div className={styles.card}>
      <img
        src={ThankYouimg}
        alt="Thank you"
        className={styles.image}
      />
      <Response selected={selected} />

      <h1 className={styles.title}>Thank you!</h1>

      <p className={styles.text}>
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </p>
    </div>
  );
}
