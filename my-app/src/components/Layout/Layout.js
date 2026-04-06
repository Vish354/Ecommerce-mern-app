import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

export const Layout = ({
  children,
  title,
  description,
  keywords,
  author,
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header />

      <main style={{ minHeight: "70vh" }}>
        <Toaster position="top-right" />
        {children}
      </main>

      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App - Shop Now",
  description: "MERN Stack Project",
  keywords: "mern,mongodb,react,express,node",
  author: "Techinfoyt",
};

export default Layout;