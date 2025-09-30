import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import About from "./pages/About";
import Team from "./pages/Team";
import PartnerWithUs from "./pages/PartnerWithUs";
import ExploreResidencies from "./pages/ExploreResidencies";
import ResidencyDetails from "./components/ResidencyDetails";
import HouseRules from "./pages/HouseRules";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Home Page   */}
          <Route path="/" element={<Home />} />
          <Route path="/explore-residencies" element={ <ExploreResidencies/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/team" element={ <Team/> }/>
          <Route path="/partner-with-us" element ={ <PartnerWithUs/> }/>
         <Route path="/explore-residencies/:slug" element={<ResidencyDetails />} />
          <Route path ="/house-rules" element={<HouseRules/>}/>
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
