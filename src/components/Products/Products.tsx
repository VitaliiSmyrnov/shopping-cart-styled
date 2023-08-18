import React, { useState, useEffect } from "react";

import { productsApi } from "src/services/api";

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
    <section>
      {status === "pending" && <p>Loading...</p>}

      {status === "fulfilled" && <ProductList items={products} />}

      {status === "rejected" && <p>{error}</p>}
    </section>
  );
};
