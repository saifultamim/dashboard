"use client";

import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-auto">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="p-4 text-lg font-bold">Dashboard</div>
        <ul className="px-4">
          <li className=" hover:bg-gray-700 cursor-pointer">Home</li>
          <li className=" hover:bg-gray-700 cursor-pointer">Profile</li>
          <li className=" hover:bg-gray-700 cursor-pointer">Settings</li>
        </ul>
      </div>
    </div>
  );
}
