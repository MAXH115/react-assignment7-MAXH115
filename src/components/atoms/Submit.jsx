import styles from './Submit.module.css';

const Submit = ({ onClick, disabled }) => {
  return (
    <button
      className={styles.Submit}
      onClick={onClick}
      disabled={disabled}
    >
      SUBMIT
    </button>
  );
};

export default Submit;