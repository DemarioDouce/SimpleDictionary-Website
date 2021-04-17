// React
import React, { useState } from "react";
// CSS
import "./res/css/style.css";

function App() {
  // Declare a new state variable
  const [searchText, setSearchText] = useState("");
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Main container */}
      <div class="container-fluid">
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
          <form>
            {/* Input */}
            <input
              type="text"
              class="form-control"
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
              class="btn"
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
            marginBottom: "10%",
          }}
        >
          {/* Row */}
          <div class="row">
            {/* Col */}
            <div class="col-sm">
              {/* Card */}
              <div
                class="card"
                style={{
                  width: "18rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">{searchText}</p>
                </div>
              </div>
            </div>
            {/* Col */}
            <div class="col-sm">
              {/* Card */}
              <div
                class="card"
                style={{
                  width: "18rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">{searchText}</p>
                </div>
              </div>
            </div>
            {/* Col */}
            <div class="col-sm">
              {/* Card */}
              <div
                class="card"
                style={{
                  width: "18rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">{searchText}</p>
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
