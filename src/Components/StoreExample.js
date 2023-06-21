import { useAtomState } from "@zedux/react";
import React from "react";
import { secondsAtom } from "./atoms";

function StoreExample() {
  const [seconds] = useAtomState(secondsAtom);
  return (
    <div
    className="example"
    >
      <div className="simple-demo">seconds: {seconds}</div>
      <div className="example-div">
        <p style={{ textAlign: "justify" }}>
          A simple way to run side effects in React components is with
          useEffect. Atoms have an injector equivalent called injectEffect that
          works exactly the same!
        </p>
      </div>
    </div>
  );
}

export default StoreExample;
