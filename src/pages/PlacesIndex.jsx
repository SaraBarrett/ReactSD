import globeImg from '../assets/globe.png'
import Places from '../components/places/Places'
import { useEffect, useState } from 'react';

export default function AvailablePlaces() {
  const [AvailablePlaces, setPlaces] = useState(null);
  
  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((response) => response.json())
      .then((resData) => {
        setPlaces(resData.places);
      });
  }, []);
  
  

  return (
    <>
    <div>
      <img src={globeImg} alt="Stylized globe" />
      <h1>PlacePicker</h1>
      <p>
        Create your personal collection of places you would like to visit or
        you have visited.
      </p>
    </div>
    <main>
      <Places
        title="Available Places"
        fallbackText="No Places Available"
        places={AvailablePlaces}
      />
    </main>
  </>
  );
}
