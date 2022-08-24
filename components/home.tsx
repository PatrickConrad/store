import { useContext, useEffect } from "react"
import { ContextConsumer } from "../state/rootContext"

const Home =() => {
    const {state, actions} = useContext(ContextConsumer);
    useEffect(()=>{
        console.log({state})
        console.log({actions})
    }, []);

  return (
    <h1>home</h1>
  )
}

export default Home