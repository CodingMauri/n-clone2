import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trailer from "./Components/Trailer"
function App() {

  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/trailer/:movieId" element = {<Trailer />} />
      </Routes>
    </>
  );
}

export default App;
