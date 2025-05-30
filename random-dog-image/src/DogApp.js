import React, {useState, useEffect} from 'react'
import './DogApp.css';


function DogApp() {
    const [dogImage, setDogImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [breed, setBreed] = useState('');

    const fetchDogImage = async () => {
        setLoading(true);
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);

        const parts = data.message.split('/');
        const breedName = parts[parts.indexOf('breeds') + 1];
        setBreed(breedName.replace('-', ' '));

        setLoading(false);
    };

    useEffect(() => {
        fetchDogImage();
    },[]);

    return (
     <div className="dog-container">
      <h1>🐶 Random Dog App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img src={dogImage} alt="Random Dog" className="dog-image" />
          <p className="breed-name">Breed: {breed}</p>
        </>
      )}
      <button onClick={fetchDogImage}>Get Another Dog</button>
    </div>
  );
}



export default DogApp