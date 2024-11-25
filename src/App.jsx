import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Video from "./pages/Video";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/video' element={<Video />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
