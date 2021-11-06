import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <>
        <MainHeader />
      </>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />

        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
