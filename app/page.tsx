import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Title */}
      <div className="mt-24 text-center space-y-2 px-2">
        <h2 className="text-md font-semibold">ဝါလကင်းလွတ် သီတင်းကျွတ်မှာ</h2>
        <h1 className="text-xl font-bold">KBZ LIFE Insurance နှင့်အတူ</h1>
        <p className="text-md font-semibold">ဆုလက်ဆောင်တွေ ရယူလိုက်ပါ</p>
      </div>

      {/* Form */}
      <form className="mt-12 w-full max-w-xs space-y-10">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 rounded-full bg-white/95 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-full bg-white/95 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-full bg-white/95 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Link href={"/product"} className="w-full">
          <div className="px-6 py-3 bg-blue-500 text-white text-center rounded-full shadow-lg hover:bg-blue-600  hover:shadow-xl transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Open
          </div>
        </Link>
      </form>
    </div>
  );
}
