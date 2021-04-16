function App() {
  return (
    <>
      <div
        class="container-fluid"
        style={{
          backgroundColor: "#fff328",
          textAlign: "center",
          padding: "6%",
        }}
      >
        <h1>SEARCH FOR A WORD</h1>
        <form>
          <input type="text" class="form-control" id="search" />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
