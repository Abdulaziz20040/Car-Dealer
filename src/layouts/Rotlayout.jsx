import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Breadcrumbs from "./Breadcrumbs";

function Rotlayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar va Breadcrumbs */}
      <header className="bg-white shadow-sm border-b">
        <Navbar />
        <Breadcrumbs />
      </header>

      {/* Asosiy kontent */}
      <div className="flex-1 bg-white w-full">
        <main className="container mx-auto px-4 md:px-8 pt-6 pb-10">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 py-6 border-t mt-2">
        <Footer />
      </footer>
    </div>
  );
}

export default Rotlayout;
