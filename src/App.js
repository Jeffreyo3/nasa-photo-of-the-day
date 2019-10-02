import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from './components/Header.js';
import CardCreator from './components/CardCreator.js';
import Footer from './components/Footer.js';



function App() {

  const [mediaSRC, setMediaSRC] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {

    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=egzW1GEaRzy8RZPDV3Cp4OhnEhsRZfMiW8bG3Ej2')
      .then(result => {
        setMediaSRC(result.data.hdurl);
        setDate(result.data.date);
        setTitle(result.data.title);
        setDescription(result.data.explanation);

      })
      .catch(err =>
        console.log(err));

  }, []);


  return (
    <div className="App">
      <div className="appContainer">

        <Header title={title} date={date}/>

        <CardCreator mediaSRC={mediaSRC} description={description}/>

      </div>

      <Footer />

    </div>
  );
}

export default App;
