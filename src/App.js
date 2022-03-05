import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Algorithm from "./pages/Algorithm";
import Graph from "./pages/Graph";
import Keyword from "./pages/Keyword";
// import { firebase } from "./asset/firebaseInit";

function App() {
  // console.log(firebase);
  // console.log(process.env);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/algorithm" element={<Algorithm />} />
      <Route path="/graph" element={<Graph />} />
      <Route path="/Keyword" element={<Keyword />} />
    </Routes>
  );
}

export default App;
