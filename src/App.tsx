import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import CheckboxContainer from "./components/CheckboxContainer";
import ClearBtn from "./components/ClearBtn";

/* 1st way: funtional component */
function App() {
  return (
    <div className="app-container">
      <Banner />
      <CheckboxContainer />
      <ClearBtn />
    </div>
  );
}

/* 2nd way: class component */

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="app-container">
//         <Banner />
//         <CheckboxContainer />
//         <ClearBtn />
//       </div>
//     );
//   }
// }

export default App;
