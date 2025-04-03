import globeImg from '../assets/globe.png'
import Places from '../components/places/Places'
import { useEffect, useState,useRef, useCallback } from 'react';
import { updatePlaces } from '../https';

export default function AvailablePlaces() {
  const [AvailablePlaces, setPlaces] = useState(null);
  const [UserPlaces, setUserPlaces] = useState([]);
  const selectedPlace = useRef(null);

  
  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((response) => response.json())
      .then((resData) => {
        setPlaces(resData.places);
      });
  }, []);

   function handleSelectPlace(selectedPlace) {
     setUserPlaces((prevPickedPlaces) => {
       if (!prevPickedPlaces) {
         prevPickedPlaces = [];
       }
       if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
         return prevPickedPlaces;
       }
       return [selectedPlace, ...prevPickedPlaces];
     });

    updatePlaces([selectedPlace, ...UserPlaces]);

    
   }
   const handleRemovePlace = useCallback(
     async function handleRemovePlace() {
       setUserPlaces((prevPickedPlaces) =>
         prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
       );

       updatePlaces(
        UserPlaces.filter((place) => place.id != selectedPlace.current.id)
       );
     },
     [UserPlaces]
   );

   function handleStartRemovePlace(place) {
    selectedPlace.current = place;
    handleRemovePlace();

  }

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
        title="My Selected Places"
        fallbackText="Select Your Places"
        places={UserPlaces}
        onSelectPlace={handleStartRemovePlace}
      />
      <Places

        title="Available Places"
        fallbackText="No Places Available"
        places={AvailablePlaces}
        onSelectPlace={handleSelectPlace}
      />
    </main>
  </>
  );
}
