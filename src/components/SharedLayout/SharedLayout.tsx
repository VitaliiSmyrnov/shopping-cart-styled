import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "src/components";

export const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};
