import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "src/components";

import { Container } from "./SharedLayout.styled";

export const SharedLayout: React.FC = () => {
  return (
    <Container>
      <Header />

      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </Container>
  );
};
