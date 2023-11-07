import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./navbar";
import { Shop } from "./shop";
import { Cart } from "./cart";
import { ShopContextProvider } from "./shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;