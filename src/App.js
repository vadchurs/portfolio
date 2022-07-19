import React from 'react';
import  "./App.css";
import Header from "./Components/Header/Header";
import Block_1 from "./Components/AboutMe/Block_1";
import Block_2 from "./Components/MySkils/Block_2";
import Block_3 from "./Components/MyWork/Block_3";
import Block_4 from "./Components/RemoteWork/Block_4";
import Block_5 from "./Components/Contacs/Block_5";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <div className={"MyApp"}>
      <Header/>
      <Block_1/>
      <Block_2/>
      <Block_3/>
      <Block_4/>
      <Block_5/>
      <Footer/>
    </div>
  );
}

export default App;
