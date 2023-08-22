import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Vanilla");
  const [darkMode, setDarkMode] = useState(true);
  const [size, setSize] = useState(24);

  return (
    <div className="AdDesigner">
      <h2>Ad Designer</h2>
      <div className={`ad${darkMode ? " dark" : ""}`}>
        <h4>Vote For</h4>
        <h3 style={{ fontSize: size + "px" }}>{flavor}</h3>
      </div>
      <section>
        <h4>What to Support</h4>
        <button
          onClick={() => setFlavor("Chocolate")}
          disabled={flavor === "Chocolate"}
        >
          Chocolate
        </button>
        <button
          onClick={() => setFlavor("Vanilla")}
          disabled={flavor === "Vanilla"}
        >
          Vanilla
        </button>
        <button
          onClick={() => setFlavor("Strawberry")}
          disabled={flavor === "Strawberry"}
        >
          Starwberry
        </button>
      </section>
      <section>
        <h4>Color Theme</h4>
        <button
          onClick={() => setDarkMode(false)}
          disabled={darkMode === false}
        >
          Light
        </button>
        <button onClick={() => setDarkMode(true)} disabled={darkMode === true}>
          Dark
        </button>
      </section>
      <h4>Font Size</h4>
      <section id="font-scaler">
        <button onClick={() => setSize((prev) => prev - 1)}>Down</button>
        <p>{size}</p>
        <button onClick={() => setSize((prev) => prev + 1)}>Up</button>
      </section>
    </div>
  );
};

export default AdDesigner;
