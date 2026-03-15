import { Link } from "react-router-dom";

export default function ContestCard({
  id,
  name,
  durationSeconds,
  startTimeSeconds,
  phase
}) {

  const startTime = new Date(startTimeSeconds * 1000).toLocaleString();
  const duration = `${durationSeconds / 3600} hrs`;

  const isFinished = phase === "FINISHED";

  return (
    <div className="bg-neutral-900 p-5 rounded-xl border border-neutral-800 
hover:border-green-500 hover:scale-[1.02] transition-all duration-300 cursor-pointer">

      <h2 className="text-white text-lg font-semibold line-clamp-2 h-[56px]">
  {name}
</h2>
      <p className="text-gray-400 text-sm mt-2">{startTime}</p>

      <p className="text-gray-500 text-sm">Duration: {duration}</p>

      {isFinished ? (
        <Link to={`/contest/${id}`}>
          <button className="mt-4 w-full py-2 bg-green-600 text-black rounded-md">
            View Standings →
          </button>
        </Link>
      ) : (
        <button
          disabled
          className="mt-4 w-full py-2 bg-gray-700 text-gray-400 rounded-md cursor-not-allowed"
        >
          Not Available Yet
        </button>
      )}

    </div>
  );
}