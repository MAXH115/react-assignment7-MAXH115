/** Component Imports */
import { useState } from 'react';
import RatingCard from './components/RatingCard.jsx';
import ThankYouCard from './components/ThankYouCard.jsx';
// import styles from './styles.css';

/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend putting those within the /components folder
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles'
 *  4. We added additional comments below to guide you
 */


// import { useState } from 'react';
import Rating from './components/RatingCard.jsx';
import ThankYou from './components/ThankYouCard.jsx';
import './style.css';

const App = () => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="app-container">
      {!submitted ? (
        <Rating
          selected={selected}
          setSelected={setSelected}
          setSubmitted={setSubmitted}
        />
      ) : (
        <ThankYou selected={selected} />
      )}
    </div>
  );
};

export default App;
