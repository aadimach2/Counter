import { Count } from "./Count";
import ButtonContainer from "./ButtonContainer";
import { Reset } from "./ResetButton";
import { Title } from "./Title";
import { useState ,useEffect} from "react";
import CountButton from "./CountButrton";

export default function Card() {

  const[count,setCount]=useState(0);
  const locked=count===5?true:false
 
 
       useEffect(()=>{
    const handleClick=(event)=>{
        if(event.code=="Space"){
         const newCount=count+1;
         if(newCount>5){
          setCount(5);
          return; 
         }
         setCount(newCount)
        }
  
      }
    
    window.addEventListener("keydown",handleClick);

    return ()=>{
        window.addEventListener("keydown",handleClick)
    }
  },[count])
  
  
  return (
    <div className={`card ${locked ? "card--limit" :""}`}>
        <Title locked={locked}/>
        <Count count={count} />
        <Reset setCount={setCount}/>
        <ButtonContainer>

        <CountButton type="plus" setCount={setCount} locked={locked}/>
        <CountButton type="minus" setCount={setCount} locked={locked}/>
        </ButtonContainer>
    </div>
  )
}
 