import React from "react";
import Greetings from "./Greetings";
import { EditGreetings } from "./EditGreetings";

function GreetingsPreview() {
  return (
    <div
      className="example"
    >
      <div className="simple-demo">
        <Greetings />
        <EditGreetings />
      </div>
      <div className="example-div">
        <p style={{ textAlign: "justify" }}>
          Atoms are building blocks of state. To create an atom, you need to
          first create an "atom template". Create these with the atom() factory:
          <ul>
            <li>We created an atom template with the key greeting.</li>
            <li>The Greeting component renders and calls useAtomState().</li>
            <li>
              Zedux sees that the greeting atom template has never been used
              before, so it creates an atom instance with a store whose initial
              state is 'Hello, world!'
            </li>
            <li>
              useAtomState() subscribes to updates in the new greeting atom
              instance and returns the current state of the instance's store.
            </li>
          </ul>
          Whenever the input's value changes, setGreeting() updates the state of
          the atom instance's store and causes the "Greeting" component to
          rerender.
        </p>
      </div>
    </div>
  );
}

export default GreetingsPreview;
