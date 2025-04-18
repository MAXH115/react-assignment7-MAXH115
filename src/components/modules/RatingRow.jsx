import Button from '../atoms/Button';
import styles from './RatingRow.module.css';

const RatingRow = ({ selected, setSelected }) => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className={styles.row}>
      {numbers.map((num) => (
        <Button
          key={num}
          label={num}
          onClick={() => setSelected(num)}
          className={selected === num ? styles.selected : ''}
        />
      ))}
    </div>
  );
};

export default RatingRow;