// React
import React, { useState } from "react";
// CSS
import "./res/css/style.css";
// Load axios package
import axios from "axios";

function App() {
  // Declare a new state variable
  const [searchText, setSearchText] = useState("");
  const [definitionText, setDefinitionText] = useState("");
  const [exampleText, setExampleText] = useState("");
  // Get current year
  const currentYear = new Date().getFullYear();
  // Handle submission
  const submission = (e) => {
    e.preventDefault();
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en_US/" + searchText)
      .then((result) => {
        setDefinitionText(result.data[0].meanings[0].definitions[0].definition);
        setExampleText(result.data[0].meanings[0].definitions[0].example);
      })
      .catch((error) => {
        console.log("There is an error, please check the word and try again.");
      });
  };

  return (
    <>
      {/* Main container */}
      <div className="container-fluid">
        {/* Top */}
        <div className="top-container">
          {/* Top header text */}
          <h1>SEARCH FOR A WORD</h1>
          {/* Form */}
          <form onSubmit={submission}>
            {/* Input */}
            <input
              className="form-control"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              required
            />
            {/* Submit button */}
            <button type="submit" className="btn">
              SEARCH
            </button>
          </form>
        </div>
        {/* Middle */}
        <div className="middle-container">
          {/* Row */}
          <div className="row">
            {/* Col */}
            <div className="col-sm">
              {/* Card */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Definition</h5>
                  <p className="card-text">{definitionText}</p>
                </div>
              </div>
            </div>
            {/* Col */}
            <div className="col-sm">
              {/* Card */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Example</h5>
                  <p className="card-text">{exampleText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <footer>
          <p>Copyright© {currentYear} Demario Douce. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
