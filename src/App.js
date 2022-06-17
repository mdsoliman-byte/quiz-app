import { useState } from "react";
import "./App.css";
import EndingPoint from "./Component/EndingPoint";
import Quiz from "./Component/Quiz";
import StartPoient from "./Component/StartPoient";

function App() {
  const [quizSetup, setQuizSetup] = useState("startingPoint");
  return (
    <div className="App">
      <div>
        {quizSetup === "startingPoint" && <StartPoient />}
        {quizSetup === "quiz" && <Quiz />}
        {quizSetup === "endigPoint" && <EndingPoint />}
      </div>
    </div>
  );
}

export default App;
