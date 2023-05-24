import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/Home/Home"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCart"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
};

export default App;
