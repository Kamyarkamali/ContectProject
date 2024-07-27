import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="h-fit">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
