import "./styles.css";

import Comp from "./composant";

function Left() {
  return (
    <div className="left">
      <div className="title">
        {"Diagobot".split("").map((char) => (
          <span>{char}</span>
        ))}
      </div>
      <div className="down">
        <span className="txt">Environment</span>
        <span className="green-block"></span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Left />
      <Comp />
    </div>
  );
}
