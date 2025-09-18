import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={ <Home/> }/>


    {/* {Error Page} */}
    <Route path="*" element= { <ErrorPage/> }/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>;
}

export default App;
