import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trailer from "./Components/Trailer";
import { AuthContextProvider } from "./context/AuthContext";
import SearchedMovies from "./Components/SearchedMovies";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account"
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trailer/:movieId" element={<Trailer />} />
          <Route path="/search/:searchQuery" element={<SearchedMovies />} />
          <Route path = "/Login" element = {<Login />} />
          <Route path = "/signup" element = {<Signup />} /> 
          <Route path = "/account" element = {<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
