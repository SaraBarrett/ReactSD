import './OurBtn.css';

export default function OurBtn({children, functionForClick}){
    
    return <button onClick={functionForClick} className="btnColor">{children}</button>
}