import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./Pages/Products" 
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/cart" element={<Cart></Cart>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
