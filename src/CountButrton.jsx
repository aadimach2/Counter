
import { PlusIcon,MinusIcon } from "@radix-ui/react-icons"


export default function CountButton({type,locked,setCount}){

    const handleClick=(event)=>{
        setCount((prev)=>{
        if (type==="minus"){
            const newCount= prev-1;
            if (newCount<0){
                return 0
            }
            return newCount
          
        }else{
            return prev+1;
        }
    }
        )
        event.currenTarget.blur();
    }


    return (
      <>
      <div className="button-container">
          <button 
          disabled={locked}
          onClick={handleClick}
          className="count-btn"> 
          {type==="minus"? (<MinusIcon className="count-btn-icon"/>):
            (<PlusIcon className="count-btn-icon"/>)}
          </button>
         
      </div>
  
      </>
    )
  }