import React, { useRef } from "react";
import Home from "./pages/Home";
import GlobalStyle from "./styles/stylesGlobal";
import Header from "./components/Header";

function App() {
  const projectsRef = useRef(null);
  const presentationRef = useRef(null);

  return (
    <div className="App">
      <GlobalStyle />
      <Header 
        scrollToProjects={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })} 
        scrollToHome={() => presentationRef.current?.scrollIntoView({ behavior: "smooth" })}
      />
      <Home 
        projectsRef={projectsRef}
        presentationRef={presentationRef}
      />
    </div>
  );
}

export default App;
