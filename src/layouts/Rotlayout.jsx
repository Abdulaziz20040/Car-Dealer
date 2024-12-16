import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Rotlayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar yuqori qismda */}
      <header>
        <Navbar />
      </header>

      {/* Asosiy kontent */}
      <div className="flex-1 bg-white w-full">
        <main className="container mx-auto px-6 pt-4 pb-8 mt-12">
          <Outlet />
        </main>
      </div>

      {/* Footer sahifaning past qismida */}
      <footer className="bg-gray-200 py-4 border-t mt-4">
        <Footer />
      </footer>
    </div>
  );
}

export default Rotlayout;
