import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const AsyncProblem = async () => {
      const resolve = await axios(API);
      setProducts(resolve.data.results);
    };
    AsyncProblem();
  }, [API]);

  return products;
};

export default useGetProducts;
