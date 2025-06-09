import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar"
import Home from "./pages/Home";
import Cources from "./pages/Cources";
import Topics from "./pages/Topics";
import Projects from "./pages/Projects";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cources" element={<Cources />} />
        <Route path="/topics" element={<Topics/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
