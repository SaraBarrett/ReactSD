export default function Card({name, title='programadora'}){
    return(<div className="card">
    {/* <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button> */}
    <p>Name: {name}</p>
    <p>Title:{title} </p>
  </div>)
  }