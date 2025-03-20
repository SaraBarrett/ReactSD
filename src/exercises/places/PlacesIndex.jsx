export default function AvailablePlaces() {  
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
        title="I'd like to visit ..."
        fallbackText="Select the places you would like to visit below."
      />
    </main>
  </>
  );
}
