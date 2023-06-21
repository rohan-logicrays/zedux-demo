import { useAtomState } from "@zedux/react";
import { textAtom } from "./atoms";
import { loudGreetingAtom } from "./atoms";

function InjectAtom() {
  const [text] = useAtomState(textAtom);
  const [loudGreeting, setLoudGreeting] = useAtomState(loudGreetingAtom);
  return (
    <div
    className="example"
    >
      <div className="simple-demo">
        <h4>Simple Text Atom :{text}</h4>
        <div>
          <h5>{loudGreeting}</h5>
          <input
            onChange={(e) => setLoudGreeting(e.target.value)}
            value={loudGreeting}
          />
        </div>
      </div>
      <div className="example-div">
        <p style={{ textAlign: "justify" }}> 
          Atoms can use other atoms. To use another atom, we "inject" it in the
          state factory: Here we used an "injector" - injectAtomState() - to
          create a dependency on textAtom. injectAtomState() is just like
          useAtomState(), but is used in atoms instead of components. This is a
          common theme with injectors:
        </p>
      </div>
    </div>
  );
}

export default InjectAtom;
