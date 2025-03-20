"use client";

import { useState } from "react";

const data = [
  { title: "Total Visitors", value: "4564", icon: "\u{1F464}" },
  { title: "Revenue", value: "$7564", icon: "\u{1F4B2}" },
  { title: "Orders", value: "7891+", icon: "\u{1F6D2}" },
  { title: "Items", value: "486", icon: "\u{1F6CD}" },
];

export default function KeyMetrics() {
  return (
    <div className="flex  justify-center gap-4  py-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 w-full text-center border border-gray-200"
        >
          <div className="text-gray-500 text-sm">{item.title}</div>
          <div className="text-2xl font-semibold mt-1">{item.value}</div>
          <div className="text-blue-500 text-3xl mt-2">{item.icon}</div>
          <a href="#" className="text-blue-600 text-sm mt-3 block font-medium">
            View data →
          </a>
        </div>
      ))}
    </div>
  );
}
