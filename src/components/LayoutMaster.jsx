import { Outlet } from "react-router-dom";


export default function LayoutMaster(){
    return(<>
        <h4>Layout Master Menu</h4>
        <Outlet/>
        <p>Rodapé</p>
    </>)
}