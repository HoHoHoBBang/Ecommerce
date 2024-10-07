import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Collection from "./pages/Collection";
import SearchBar from "./components/SearchBar";
import Product from "./pages/Product";
import NewsletterBox from "./components/NewsletterBox";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="px-[3vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <NewsletterBox />
      <Footer />
    </div>
  );
}

export default App;
