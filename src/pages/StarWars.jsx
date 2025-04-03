import { useState, useEffect } from "react";

export default function StarWars(){
  const [films, setFilms] = useState(null);
  
  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((resData) => {
        setFilms(resData.results)
        console.log(resData.results)

      });
  }, []);
  

 return(<div>
    <h5>Filmes</h5>
    <ul>
        {(!films || films.length == 0) && <p> Não tem ainda filmes</p>}
        {(films &&  films.length >0) && films.map((film) => (
        <li key={films.title}>
            {film.title}
        </li>))}
    </ul>

 </div>);
}