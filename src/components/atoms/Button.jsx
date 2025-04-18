import styles from './Button.module.css';

const Button = ({ label, onClick, className = '' }) => {
  return (
    <button className={`${styles.Button} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;