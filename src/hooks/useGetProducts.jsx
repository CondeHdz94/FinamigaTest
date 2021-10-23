import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const AsyncProblem = async () => {
      const number = parseInt(Math.random() * 10)
      const resolve = await axios(`${API}${number}`);
      setProducts(resolve.data.results);
    };
    AsyncProblem();
  }, [API]);

  return products;
};

export default useGetProducts;
