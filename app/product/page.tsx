"use client";
import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <div>
      {/* Title */}
      <div className="mt-24 text-center space-y-2 px-2">
        <h2 className="text-md font-semibold">ဝါလကင်းလွတ် သီတင်းကျွတ်မှာ</h2>
        <h1 className="text-xl font-bold">KBZ LIFE Insurance နှင့်အတူ</h1>
        <p className="text-md font-semibold">ဆုလက်ဆောင်တွေ ရယူလိုက်ပါ</p>
      </div>

      {/* Fire Balloon Image */}
      <div className="mt-24  flex flex-col items-center justify-center bounce-delay">
        <Image
          src="/balloon.png"
          alt="Fire Balloon"
          width={160}
          height={160}
          className=""
          priority
        />
        <button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600  hover:shadow-xl transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
          Open
        </button>
      </div>
    </div>
  );
};

export default Product;
