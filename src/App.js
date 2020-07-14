import React, { useState, useEffect } from "react";
import { ImageCard } from "./components/imageCard";
import { ImageSearch } from './components/imageSearch'

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("animals");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXA_KEY}&q=${term}+flowers&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);  
  console.log('hits array:', images)

  return (
    <div className="container mx-auto"> 
    <ImageSearch searchText={(text) => setTerm(text)} />

    {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">no images found - try again</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>

  );
};
