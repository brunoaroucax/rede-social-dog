import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Index";
import Header from "./components/Header/Index";
import Home from "./components/Home/Index";
import Login from "./components/Login/Index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
