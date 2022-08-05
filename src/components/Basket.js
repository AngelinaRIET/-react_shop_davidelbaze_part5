import { useContext } from "react";
import { ShopContext } from "../ShopService";
export default function Basket() {
  const context = useContext(ShopContext);
  return <div>Il y a {context.basket.length} produits dans le panier</div>;
}
