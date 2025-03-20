import './OurBtn.css';

export default function OurBtn({children, functionForClick, active}){
    
    return <button onClick={functionForClick} className={active ?'activeBtn': 'btnColor'}>{children}</button>

}