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
        <div
          style={{
            backgroundColor: "#b0efeb",
            textAlign: "center",
            padding: "6%",
          }}
        >
          {/* Top header text */}
          <h1 style={{ fontWeight: "bold" }}>SEARCH FOR A WORD</h1>
          {/* Form */}
          <form onSubmit={submission}>
            {/* Input */}
            <input
              type="text"
              className="form-control"
              style={{
                width: "50%",
                padding: "12px 20px",
                margin: "8px auto 0 auto",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                borderRadius: "8px",
              }}
              onChange={(e) => setSearchText(e.target.value)}
              required
            />
            {/* Submit button */}
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#edffa9",
                color: "#000",
                padding: "10px 30px",
                fontSize: "16px",
                margin: "10px 10px",
                border: "1px solid #fff",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
            >
              SEARCH
            </button>
          </form>
        </div>
        {/* Middle */}
        <div
          style={{
            textAlign: "center",
            padding: "6%",
            marginBottom: "5%",
          }}
        >
          {/* Row */}
          <div className="row">
            {/* Col */}
            <div className="col-sm">
              {/* Card */}
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">Definition</h5>
                  <p className="card-text">{definitionText}</p>
                </div>
              </div>
            </div>
            {/* Col */}
            <div className="col-sm">
              {/* Card */}
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">Example</h5>
                  <p className="card-text">{exampleText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <footer
          style={{
            textAlign: "center",
          }}
        >
          <p
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Copyright© {currentYear} Demario Douce. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
