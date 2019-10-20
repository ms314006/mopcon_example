import React, { useState } from 'react';
import styles from './index.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      className={styles.counter}
      data-testid="counter"
    >
      <div
        className={styles.counterText}
        data-testid="counterText"
      >
        {count}
      </div>
      <button
        type="button"
        className={styles.counterButton}
        onClick={() => { setCount(count + 1); }}
        data-testid="counterButton"
      >
        點我加 1
      </button>
    </div>
  );
};

export default Counter;
