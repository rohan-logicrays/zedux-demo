import { useAtomState } from "@zedux/react";
import { greetingAtom,loudGreetingAtom } from "./atoms";

export const EditGreetings = () => {
  const [greeting, setGreeting] = useAtomState(greetingAtom);
  const [loudGreeting,setLoudGreeting] = useAtomState(loudGreetingAtom);
  return (
    <div>
      <small>edit greetings componet</small>
      <br />
      <br />
      <input
        onChange={({ target }) => setGreeting(target.value)}
        value={greeting}
        placeholder="enter greeting"
      />
   
    </div>
  );
};
