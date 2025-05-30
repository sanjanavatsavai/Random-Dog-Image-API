import React, {useState, useEffect} from 'react'


function DogApp() {
    const [dogImage, setDogImage] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchDogImage = async () => {
        setLoading(true);
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);
        setLoading(false);
    };

    useEffect(() => {
        fetchDogImage();
    },[]);

    return (
    <div className="dog-container">
      <h1>🐶 Random Dog App</h1>
      {loading ? <p>Loading...</p> : <img src={dogImage} alt="Random Dog" className="dog-image" />}
      <button onClick={fetchDogImage}>Get Another Dog</button>
    </div>
  );
  
}



export default DogApp