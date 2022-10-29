import { BrowserRouter as Router } from "react-router-dom";

import Inizio from "./lezioni/11-React-Router/v6/inizio/index";

import Nav from "./lezioni/11-React-Router/v6/inizio/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <section className="container text-center my-3">
          <Nav/>
          <Inizio />
        </section>
      </div>
    </Router>
  );
}

export default App;
