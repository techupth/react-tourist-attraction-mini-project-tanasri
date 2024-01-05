import "./App.css";
import Header from "../pages/header";
import Body from "../pages/body";
import { useState } from "react";
import React from "react";

export const KeywordContext = React.createContext();

function App() {
  const [keyword, setKeyword] = useState("");
  return (
    <div className="App">
      <KeywordContext.Provider value={{ keyword, setKeyword }}>
        <Header />
        {!keyword && <Body />}
      </KeywordContext.Provider>
    </div>
  );
}

export default App;
