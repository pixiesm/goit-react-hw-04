import { useState } from "react";
import "./App.css";
import fetchImages from "./services/api";
import { useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchImages();
      console.log(data);
      setImages(data);
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <ul>
          {images.map((image) => (
            <li key={image.id}>
              <img src={image.urls.small} alt="" target="blank" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
