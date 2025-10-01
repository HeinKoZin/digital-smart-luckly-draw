"use client";
import Image from "next/image";
import React, { useState } from "react";

const Product = () => {
  const [open, setOpen] = useState(false);
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
          width={200}
          height={200}
          className=""
          priority
        />
        {!open ? (
          <button
            onClick={() => setOpen(true)}
            className="px-6.5 mr-1 py-2 rounded bg-blue-500 cursor-pointer text-white  shadow-lg hover:bg-blue-600  hover:shadow-xl transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Open
          </button>
        ) : (
          <div className="w-full flex items-center justify-center">
            <div className="relative w-[140px] bg-white rounded-[16px] shadow-md px-3 pt-3 pb-2 text-center overflow-hidden">
              <h3 className="leading-tight font-medium text-xs text-[#1b1b1b]">
                KBZLIFE Brand
              </h3>

              <p className="mt-1 text-sm font-semibold text-[#27A6E5]">
                Gift Coffee Mug
              </p>

              <p className="mt-1 text-[10px] leading-tight text-black">
                လက်ဆောင်ရရှိပါသည်။
              </p>

              <div className="relative my-2">
                <div className="border-t border-dashed border-gray-300"></div>

                <span className="absolute top-1/2 -left-5 h-3 w-3 -translate-y-1/2 rounded-full bg-[#0A2A6E]"></span>
                <span className="absolute top-1/2 -right-5 h-3 w-3 -translate-y-1/2 rounded-full bg-[#0A2A6E]"></span>
              </div>

              <div>
                <Image
                  src="/main-logo.png"
                  alt="KBZ Life"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
