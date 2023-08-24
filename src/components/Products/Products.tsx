import React, { useState, useEffect } from "react";

import { ProductList } from "./ProductList/ProductList";
import { Loader } from "src/components";

import { productsApi } from "src/services/api";

import { StyledSection } from "./Products.styled";

import { Product } from "src/modules/IProducts";

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setStatus("pending");

      try {
        const data = await productsApi.fetchAllProducts();

        setProducts(data);
        setStatus("fulfilled");
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
          setStatus("rejected");
        }
      }
    })();
  }, []);

  return (
    <StyledSection>
      {status === "pending" && <Loader />}

      {status === "fulfilled" && <ProductList items={products} />}

      {status === "rejected" && <p>{error}</p>}
    </StyledSection>
  );
};
