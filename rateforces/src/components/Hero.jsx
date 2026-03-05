import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-neutral-950">
      
      <h1 className="text-5xl md:text-6xl font-bold text-white">
        RateForces
      </h1>

      <p className="text-xl md:text-2xl mt-4 text-green-400 max-w-2xl">
        See Your Codeforces Rating Change Before It’s Official.
      </p>

      <p className="text-gray-400 mt-3">
        Fast, Accurate & Contest-Based Predictions.
      </p>

      <div className="mt-6 flex gap-4">
        <a href="#contests" className="px-6 py-3 bg-green-500 text-black rounded-md font-semibold">
          Browse Contests
        </a>

        <Link
  to="/predictor"
  className="px-6 py-3 border border-green-400 text-green-400 rounded-md font-semibold hover:bg-green-400 hover:text-black transition"
>
  Try Predictor
</Link>
      </div>

    </div>
  );
}