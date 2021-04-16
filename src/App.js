// CSS
import "./res/css/style.css";

function App() {
  return (
    <>
      {/* Main container */}
      <div
        class="container-fluid"
        style={{
          backgroundColor: "#b0efeb",
          textAlign: "center",
          padding: "6%",
        }}
      >
        {/* Header text */}
        <h1>SEARCH FOR A WORD</h1>
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
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
            id="search"
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
            }}
          >
            SEARCH
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
