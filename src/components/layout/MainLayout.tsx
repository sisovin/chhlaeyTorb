import React from "react";

import TopPromoBar from "../TopPromoBar";
import Header from "../Header";
import Footer from "../Footer";

import { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopPromoBar />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
