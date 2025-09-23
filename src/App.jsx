import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import About from "./pages/About";
import Team from "./pages/Team";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Home Page   */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={ <About/> }/>
          <Route path="/team" element={ <Team/> }/>
          {/* {Error Page} */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <WhatsAppFloatingButton />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
