import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div>
      <>
        <MainHeader />
      </>
      <Routes>
        <Route exact path="/" element={<h1>Hello</h1>} />

        <Route path="/welcome" element={<Welcome />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
