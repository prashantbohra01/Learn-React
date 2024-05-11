import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";


// **************Older Method*******************
// createRoot.render(
// <>
// <h2 className="head">My name is Prashant Bohra</h2>
// <img src={img1} alt="random"/>                     
// <img src={img2} alt="random"/>
// <img src={img3} alt="random"/>
// </>,
// document.getElementById('root'));
// ***********************************************

const head = {
    color: "green",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "32px",
    fontFamily: '"Poetsen One", sans-serif',
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <>
 <h2 style={head}>My name is Prashant Bohra</h2>
 <div className="img-div">
 <img className="img" src={img1} alt="random"/>                     
 <img className="img" src={img2} alt="random"/>
 <img className="img" src={img3} alt="random"/>
 </div>
 </>
)