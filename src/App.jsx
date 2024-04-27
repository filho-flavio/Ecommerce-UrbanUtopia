import "./source.css";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sold from "./components/Sold/Sold";
import NewProducts from "./components/NewsProducts/NewProducts";
import Brands from "./components/Brands/Brands";
import Contact from "./components/Contact/Contact";
import { Cart } from "./components/Card/Cart";
import { useCart } from "./hooks/useCart";

function App() {
  const { isOpenCard } = useCart();

  return (
    <>
      <Header />
      <Categories />
      <Sold />
      <NewProducts />
      <Brands />
      <Contact />
      <div className="last-text">
        <p>Copyright © 2024 All rights reserved | This template is made by Flavio Filho</p>
      </div>

      {isOpenCard && <Cart />}
    </>
  )
}

export default App
