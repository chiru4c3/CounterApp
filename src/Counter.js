import React, { useState } from "react";

import "animate.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="animate__animated animate__fadeIn counter-title">
        Counter App
      </h1>
      <p className="animate__animated animate__bounce counter-text">
        Count: {count}
      </p>
      <div className="button-container">
        <button
          onClick={increment}
          className="animate__animated animate__rubberBand increment-button"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="animate__animated animate__rubberBand decrement-button"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="animate__animated animate__rubberBand reset-button"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
