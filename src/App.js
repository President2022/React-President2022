import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Algorithm from "./pages/Algorithm";
import Graph from "./pages/Graph";
import Loading from "./components/keyword/Loading";
// import Keyword from "./pages/Keyword";
// import { firebase } from "./asset/firebaseInit";

const Keyword = lazy(() => import("./pages/Keyword"));

function App() {
  // console.log(firebase);
  // console.log(process.env);
  return (
    // <>
    //   <div>HEader</div>
    //   <div>Sidebar</div>
    //   <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/algorithm" element={<Algorithm />} />
      <Route path="/graph" element={<Graph />} />
      <Route
        path="/Keyword"
        element={
          <Suspense fallback={<Loading />}>
            <Keyword />
          </Suspense>
        }
      />
    </Routes>
    //   </div>
    // </>
  );
}

export default App;
