import styles from './Response.module.css';

const Response = ({ selected }) => {
  return (
    <div className={styles.Response}>
      You selected {selected} out of 5
    </div>
  );
};

export default Response;