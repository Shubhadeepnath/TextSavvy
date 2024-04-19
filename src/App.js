import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Alert from "./components/Alert";

//import About from "./components/About";

import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("DarkMode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="TextSavvy" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Form
          showAlert={showAlert}
          Heading="Enter The Text To Analyze"
          mode={mode}
        />
        {/*<About /> */}
      </div>
    </>
  );
}

export default App;
