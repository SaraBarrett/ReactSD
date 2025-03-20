import { useState } from "react";
import OurBtn from "./OurBtn";

export default function Delete(){
    const [confirmDelete, setConfirmDelete] = useState(false); 
    
    
    function changeState(show){
        setConfirmDelete(show);
    } 

    return (
        <div>
          {confirmDelete && <div data-testid="alert" id="alert">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            <button onClick={() => changeState(false) }  >Proceed</button>
          </div>}
            <OurBtn functionForClick={() => changeState(true)}>Delete</OurBtn> 
        </div>    
      );
}