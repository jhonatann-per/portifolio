import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./styles/stylesGlobal"; 
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <GlobalStyle /> 
      <Header />
      <Home />
    </div>
  );
}

export default App;
