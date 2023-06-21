import { api, atom ,injectAtomState, injectCallback, injectEffect, injectStore} from "@zedux/react";
import axios from "axios";


export const greetingAtom = atom("greeting", "Hello, world!");

export const textAtom = atom('text', 'I am simple text')



export const loudGreetingAtom = atom('loudGreeting', () => {
  const [text] = injectAtomState(textAtom)

  return `HELLO, ${text.toUpperCase()}`
})
export const secondsAtom = atom('seconds', () => {
    const store = injectStore(0)
  
  
    injectEffect(() => {
      const intervalId = setInterval(() => {
        store.setState(state => state + 1)
      }, 1000)
  
  
      return () => clearInterval(intervalId) // remember cleanup
    }, [])
  
  
    return store.getState() // <- don't do this! (see next section)
  })
  
export const getApiData = atom('apidata',()=>{
    const store = injectStore([])
   
    injectEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then(response => store.setState(response.data))
    },[])
    return store.getState()
})

export const setApiData = atom('setApiData',()=>{
    const store = injectStore({
        title: 'new data',
      })
    
    
      const handleClick = injectCallback(() => {
      
        axios.post('http://localhost:3000/posts',store.getState())
    
      }, [])
    
   
    return api(store).setExports({handleClick})
})

export const isLoadingAtom = atom("loadingAtom",()=>{
    const store = injectStore(false)
    injectEffect(()=>{
        store.setState(true)
        setTimeout(() => {
            store.setState(false)
        }, 500);
    },[])
    return store.getState()
})