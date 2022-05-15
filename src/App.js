import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/Home.js" element={<Home />} />
        <Route path="/TripsList" element={<TripsList />} />
        <Route path="/TripDetail/:tripId" element={<TripDetail />} />
      </Routes>
    </div>
  );
}

export default App;
