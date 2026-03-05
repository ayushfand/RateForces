import { FaBolt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-black/40 backdrop-blur-lg fixed top-0 left-0 z-50">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <FaBolt className="text-green-400 text-xl" />
        <h1 className="text-white font-semibold text-xl">RateForces</h1>
      </div>

      {/* Menu */}
      <div className="flex gap-6 text-gray-300">
        <a href="#how" className="hover:text-white transition">How To Use</a>
        <a href="#features" className="hover:text-white transition">Features</a>
        <a href="#contests" className="hover:text-white transition">Contests</a>
      </div>

    </nav>
  );
}