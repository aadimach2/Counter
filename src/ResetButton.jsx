  import {ResetIcon} from "@radix-ui/react-icons"

  export const Reset=({setCount})=>{
    return (
        <>
         
            <button
            onClick={()=>{setCount(0)}} className="reset-btn">
             <ResetIcon className="reset-btn-icon"/>
             </button>
        </>
    )
  }













































































