import { FaChartLine, FaSearch, FaListOl, FaBolt, FaTable, FaCode } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaChartLine size={28} className="text-green-400" />,
      title: "Accurate Rating Prediction",
      desc: "Predict rating changes using Codeforces-style rating calculations."
    },
    {
      icon: <FaTable size={28} className="text-green-400" />,
      title: "Full Contest Standings",
      desc: "View contest rankings along with scores and solving time."
    },
    {
      icon: <FaSearch size={28} className="text-green-400" />,
      title: "Fast Handle Search",
      desc: "Quickly locate your handle even in contests with thousands of participants."
    },
    {
      icon: <FaListOl size={28} className="text-green-400" />,
      title: "Paginated Leaderboards",
      desc: "Smooth browsing with 25–100 users per page."
    },
    {
      icon: <FaCode size={28} className="text-green-400" />,
      title: "Contest Insights",
      desc: "See solved problems, penalty time, and contest performance."
    },
    {
      icon: <FaBolt size={28} className="text-green-400" />,
      title: "Fast & Lightweight",
      desc: "Optimized for speed so you get predictions instantly."
    }
  ];

  return (
    <div id="features" className="mt-24 text-center text-white px-6">

      <h2 className="text-3xl font-bold mb-12">Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((f, index) => (
          <div
            key={index}
            className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-green-500 transition"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>

            <h3 className="text-green-400 text-lg font-semibold">
              {f.title}
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              {f.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}