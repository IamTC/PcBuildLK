import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainView from "./components/MainView/mainView";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <MainView />
      <Footer />
    </div>
  );
}

export default App;
