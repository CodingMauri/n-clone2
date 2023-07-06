import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trailer from "./Components/Trailer"
import SearchedMovies from "./Components/SearchedMovies";
function App() {

  return (
    <div className = "w-full">

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/trailer/:movieId" element = {<Trailer />} />
        <Route path = "/search/:searchQuery" element  = {<SearchedMovies />} />
      </Routes>
    </div>
  );
}

export default App;
