// import React, {useState, useEffect} from "react";
// import axios from "axios";

// const AxiosData = (props) => {

//     const [Image, setImage] = useState([])

//     useEffect(() => {
//         axios
//           .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//           .then(response => {
//             console.log(response.data);
//             setImage(response.data.url)})
//           .catch(err => console.log(err));
//        }, [])

//       return (<div>Hello</div>);
// }


// export default AxiosData;