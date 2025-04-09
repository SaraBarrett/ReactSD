import OurBtn from '../components/OurBtn.jsx';
import {shoppingList} from '../data/data.js';

export default function ShoppingList(){
 return(
    <div>
    <OurBtn>Cucu</OurBtn>
     
    <h5>Lista de Compras</h5>
          <ul>
            {shoppingList.map((item) => 
            <li key={item.qt}>{item.qt}:{item.item}</li>
          )}
          </ul>
    </div>
 )}