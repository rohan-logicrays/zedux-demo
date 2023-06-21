import { useEffect } from "react";
import { getApiData, setApiData,isLoadingAtom } from "./atoms";
import { useAtomInstance, useAtomState } from "@zedux/react";
function ApiHandle() {

  const [apiData] = useAtomState(getApiData);
  const {handleClick} = useAtomInstance(setApiData).exports
  const [isLoading]= useAtomState(isLoadingAtom)
  const handleButtonClick = ()=>{
    handleClick();
    // eslint-disable-next-line no-restricted-globals
    location.reload();

  }

  return (
    <div
    className="example"
    >
      <div className="simple-demo">
       {isLoading?<h3>Loading</h3>: <ul>
          {apiData.map((item, i) => {
            return <li key={i}>{item.title}</li>;
          })}
        </ul>}
        <button onClick={()=>handleButtonClick()}>add new</button>
      </div>
      <div className="example-div">
        <p style={{ textAlign: "justify" }}>
          here the data is bieng called by api using the injectEffect hook of
          zedux
        </p>
      </div>
    </div>
  );
}

export default ApiHandle;
