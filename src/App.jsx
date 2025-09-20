import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Home Page   */}
          <Route path="/" element={<Home />} />
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
