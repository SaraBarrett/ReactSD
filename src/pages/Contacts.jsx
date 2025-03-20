import { userData } from "../data/data"
import Card from "../components/Card"
import { useParams } from "react-router-dom"

export default function Contacts(){
    let {name} = useParams();
    
    return(<div>
    <h5>Olá {name}</h5>
    <Card name={userData.name}/>
      <Card name='Márcia' title='coordenadora'/>
      <Card name='Bruno' title='coordenador pedagógico'/>
    </div>)
}