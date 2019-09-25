// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import CardCreator from "./CardCreator.js";

// function getImageData () {

//     const [image, setImage] = useState([]);

//     useEffect(() => {
//         axios
//         .get("https://api.nasa.gov/planetary/apod?api_key=egzW1GEaRzy8RZPDV3Cp4OhnEhsRZfMiW8bG3Ej2")
//         .then(result => {
//             setImage(result.data);
//         })
//         .catch(err => {
//             console.log(err);
//         });
        

//     }, []);

//     return (
//         <div>
//             {image.map(image => {
//                 return (
//                     <CardCreator
//                         title={image.title}
//                         key={image.date}
//                         todaysImage={image.hdurl}
//                         description={image.explanation} 
//                     />
//                 );
//             })}
//         </div>
//     );
// }

// export default getImageData;