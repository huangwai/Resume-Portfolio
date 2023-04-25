import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        {/* header */}
        <Navbar />
        {/* page setup */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about" element={<Home />} />

          {/* Authenication stuff here */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
