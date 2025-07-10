// src/components/Layout.tsx
import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
      <main className="container py-5">
        {children}
      </main>
    <Footer />
  </>
);

export default Layout;
