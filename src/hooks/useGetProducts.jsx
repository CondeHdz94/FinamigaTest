import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API, number) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const AsyncProblem = async () => {
      const resolve = await axios(`${API}${number}`);
      setProducts(resolve.data.results);
    };
    AsyncProblem();
  }, [API, number]);

  return products;
};

export default useGetProducts;
