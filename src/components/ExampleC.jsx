import React, { useState, useEffect } from "react";

const ExampleC = (props) => {
  console.info("Example C start");
  const [number, setNumber] = useState(3);

  const handleButtonClick = () => {
    setNumber(number - 1);
  };

  useEffect(() => {
    if (number === 0) {
      console.log("ExampleC says: the number is zero");
    }
  });

  console.info("Example C returning...");
  return (
    <div className="example">
      <h2>Hi I am the third example</h2>
      <p>In my click handler:</p>
      <code>
        setNumber(number - 1); <br />
      </code>
      <p>
        Then, outside my click handler, I have a useEffect hook that depends on <code>number</code>
      </p>
      <code>
        useEffect(() => &#123; if (number === 0) &#123; console.log("Example C says: the number is zero"); &#125;
        &#125;, [number]);
      </code>
      <section>
        <p>The number in my state is:</p>
        <h2>{number}</h2>
        {number === 0 && <h4>The console logs when the number is zero once, hurrah!</h4>}
        {number !== 0 && <button onClick={handleButtonClick}>Decrease the number!</button>}
      </section>
    </div>
  );
};

export default ExampleC;
