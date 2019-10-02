import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from './components/Header.js';
import CardCreator from './components/CardCreator.js';
import VideoCardCreator from './components/VideoCardCreator.js';
import Footer from './components/Footer.js';



function App() {


  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {

    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=egzW1GEaRzy8RZPDV3Cp4OhnEhsRZfMiW8bG3Ej2')
      .then(result => {

        setImage(result.data);
        setDate(result.data.date);

      })
      .catch(err =>
        console.log(err));

  }, [date]);

  console.log(image);

  if (!image.url) {

    return (

      <div className="App" >
      
        <div className="appContainer">

          <header>
            <h1 className="title">
              Launching NASA Media of the Day
            </h1>
          </header>

          <h3>Loading . . .</h3>

        </div>

        <Footer image={image}/>

      </div>

    );

  } else {

    return (
      <div className="App">
        <div className="appContainer">

          <Header image={image}/>
          {(image.media_type === "image") ? <CardCreator image={image}/> : <VideoCardCreator image={image}/>}

        </div>

        <Footer image={image}/>

      </div>
      
    );
  }
}

export default App;