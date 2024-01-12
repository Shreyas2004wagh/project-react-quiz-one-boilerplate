import React from 'react';
import './App.css';
import HomeComponent from "./components/HomeComponent.jsx"
import QuizComponent from "./components/QuizComponent.jsx";
import ResultComponent from "./components/ResultComponent.jsx";

function App() {
  return (
    <div className="App">
      <HomeComponent />
      <QuizComponent />
      <ResultComponent />
    </div>
  );
}

export default App;