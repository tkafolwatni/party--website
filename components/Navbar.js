// components/Navbar.js
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">حزب التكافل الوطني السوري</div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
        <ul className="hidden md:flex space-x-4 space-x-reverse text-lg">
          <li><a href="#vision" className="hover:underline">الرؤية السياسية</a></li>
          <li><a href="#membership" className="hover:underline">شروط العضوية</a></li>
          <li><a href="#contact" className="hover:underline">اتصل بنا</a></li>
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 text-right text-lg">
          <li><a href="#vision" className="block hover:underline">الرؤية السياسية</a></li>
          <li><a href="#membership" className="block hover:underline">شروط العضوية</a></li>
          <li><a href="#contact" className="block hover:underline">اتصل بنا</a></li>
        </ul>
      )}
    </nav>
  );
}