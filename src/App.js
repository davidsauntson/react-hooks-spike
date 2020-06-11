import React, { useState } from "react";
import "./App.css";
import ExampleA from "./components/ExampleA";
import ExampleB from "./components/ExampleB";
import ExampleC from "./components/ExampleC";

function App() {
  const [isShowingReasons, setIsShowingReasons] = useState(false);

  const handleShowReasonsClick = () => {
    setIsShowingReasons(true);
  };

  return (
    <div className="App">
      <h1>A small experiment into react hooks</h1>
      <p>Click on the buttons to see how each component deals with updates to state</p>
      <div className="examples">
        <ExampleA />
        <ExampleB />
        <ExampleC />
      </div>
      {!isShowingReasons && (
        <button onClick={handleShowReasonsClick}>
          <h2>show reasoning</h2>
        </button>
      )}
      {isShowingReasons && (
        <div className="examples">
          <div className="example">
            <p>
              The click handler forms a closure that has 'captured' the value of number from when the component is
              rendered (executed...?). Since we aren't passing a value to the handler
              <code> number </code> will be whatever is was from before the button was clicked.
            </p>
            <p>
              Since we are hiding the button when <code> number === 0 </code>, its value is never actually zero when the
              button is clicked. Therefore the message is never logged to the console.
            </p>
          </div>
          <div className="example">
            <p>
              Here, we have moved the conditional that depends on <code> number </code> outside of the click handler. It
              is therefore not inside a closure. When the button clicks for the 3rd time, when the component re-renders
              the condition is true so the message is logged.
            </p>
            <p>
              Note that it is logged twice when <code> StrictMode </code> is on it will be logged twice. StrictMode does
              this to help determine if you are doing a bad react. See more here:{" "}
              <a href="https://reactjs.org/docs/strict-mode.html">React Strict Mode</a>
            </p>
          </div>
          <div className="example">
            <p>
              The <code> useEffect </code> hook tells the component to do something <i>after</i> the component has
              rendered. When the button clicks for the third time, number is zero, but the logging statement isn't
              immediately executed, we wait for the component to render then log the message. Hence it is only displayed
              once.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
