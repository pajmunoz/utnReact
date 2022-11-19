import { useEffect, useState } from "react";
import { getMeli } from "../services/swCharService";
import Product from "../components/Product/Product";
import Loader from "../components/Loader/Loader";
import Search from "../components/Search/Search";

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [buscar, setBuscar] = useState('mazda')


  useEffect(() => {
    const result = async () => {
      try {
        const responseData = await getMeli(buscar);
        setProducts(responseData.results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
 
    result();
  },[buscar]);
  if (!loading) {
    return (
      <div className="main row">
        <Search value={buscar} onChange={(e) => setBuscar(e.target.value)}/>
        {products.map((product, key) => (
          <Product
            key={key}
            title={product.title}
            price={product.price}
            id={product.id}
            thumbnail={product?.thumbnail}
            currency={product.currency_id}
          />
        ))}
      </div>
    );
  } else {
    return (
      <Loader />
    );
  }
}
