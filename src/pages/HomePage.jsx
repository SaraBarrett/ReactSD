import { Link } from "react-router-dom";


export default function HomePage(){
    return(<div>
        <h5>As Minhas Funcionalidades</h5>
        <ul>
            <li><Link to="/shopping-list">ShoppingList</Link></li>
            <li><Link to="/contacts/Sara">Contactos</Link></li>
        </ul>
    </div>);

}