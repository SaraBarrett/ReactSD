import { useState } from "react";
import OurBtn from "./OurBtn";

export default function Discount () {
    const [price, setPrice] = useState(100);

    function changePrice(){
        setPrice(75);   
    }

    return (
        <div>
            <p data-testid="price">{price}€</p>
            <OurBtn functionForClick={changePrice}>Apply Discount</OurBtn>
    
        </div>
    );
}
 