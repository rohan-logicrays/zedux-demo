import { useAtomState } from "@zedux/react";
import { greetingAtom } from "./atoms";
import { textAtom } from "./atoms";

function Greetings() {
  const [greeting, setGreeting] = useAtomState(greetingAtom);
  const [text] = useAtomState(textAtom);
  return (
    <div style={{borderBottom:"2px solid white",marginBottom:"15px"}}>
        <small>greetings componet</small>
      <h4>Greetings : {greeting}</h4>
    </div>
  );
}

export default Greetings;
