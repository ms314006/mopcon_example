import React, { useState } from 'react';
import styles from './index.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.counter}>
      <div className={styles.counterText}>
        {count}
      </div>
      <button
        type="button"
        className={styles.counterButton}
        onClick={() => { setCount(count + 1); }}
      >
        點我加 1
      </button>
    </div>
  );
};

export default Counter;
