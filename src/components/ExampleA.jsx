import React, { useState } from "react";

const ExampleA = (props) => {
  const [number, setNumber] = useState(3);

  const handleButtonClick = () => {
    setNumber(number - 1);

    if (number === 0) {
      console.log("Example A says: the number is zero");
    }
  };

  return (
    <div className="example">
      <h2>Hi I am the first example</h2>
      <p>In my click handler:</p>
      <code>
        setNumber(number - 1); <br />
        if (number === 0) &#123; console.log("the number is zero"); &#125;
      </code>
      <section>
        <p>The number in my state is:</p>
        <h2>{number}</h2>
        {number === 0 && <h4>The console doesn't log when the number is zero</h4>}
        {number !== 0 && <button onClick={handleButtonClick}>Decrease the number!</button>}
      </section>
    </div>
  );
};

export default ExampleA;
