import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <Home/> }/>


    {/* {Error Page} */}
    <Route path="*" element= { <ErrorPage/> }/>
  </Routes>
  </BrowserRouter>
  </>;
}

export default App;
