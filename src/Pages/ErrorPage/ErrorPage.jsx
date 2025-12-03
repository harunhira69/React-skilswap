import { Link } from "react-router";
import { AlertTriangle } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] relative overflow-hidden px-6">

      {/* 🔹 Animated Blurry Background Circles */}
      <div className="absolute w-60 h-60 bg-purple-600/20 rounded-full blur-[100px] top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] bottom-10 right-10 animate-ping"></div>

      {/* 🔹 Card */}
      <div className="relative bg-white/10 border border-white/20 backdrop-blur-xl p-12 rounded-3xl shadow-2xl text-center max-w-md z-10">

        {/* Icon */}
        <div className="mx-auto w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
          <AlertTriangle className="w-14 h-14 text-red-400" />
        </div>

        {/* Title */}
        <h1
          className="text-6xl font-extrabold mb-4 
          bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 
          text-transparent bg-clip-text drop-shadow-2xl"
        >
          404
        </h1>

        <p className="text-gray-300 text-lg mb-6">
          The page you are looking for cannot be found.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl text-white font-semibold 
          bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl 
          hover:scale-110 active:scale-95 transition-all duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
