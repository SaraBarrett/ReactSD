import './OurBtn.css';

export default function OurBtn({children, onSelect}){
    return <button onClick={onSelect} className="btnColor">{children}</button>
}