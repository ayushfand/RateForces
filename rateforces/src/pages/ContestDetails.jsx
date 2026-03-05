import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStandings } from "../utils/api";

export default function ContestDetails() {

  const { contestId } = useParams();

  const [handle, setHandle] = useState("");
  const [standings, setStandings] = useState([]);
  const [page, setPage] = useState(1);
  const [contestName, setContestName] = useState("");
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {

    const loadStandings = async () => {
      const data = await getStandings(contestId, page);
      setStandings(data);
    };

    loadStandings();

  }, [contestId, page]);

  
  const handleSearch = async () => {

  if (!handle) return;

  setSearching(true);
  setError("");

  let currentPage = 1;

  while (true) {

    const data = await getStandings(contestId, currentPage);

    if (data.length === 0) {
      setSearching(false);
      setError("User not found in this contest.");
      return;
    }

    const found = data.find(
      user => user.handle.toLowerCase() === handle.toLowerCase()
    );

    if (found) {

      setPage(currentPage);
      setSearching(false);

      setTimeout(() => {
        const element = document.getElementById(found.handle);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);

      return;
    }

    currentPage++;

  }

};

  return (
    <div className="bg-neutral-950 min-h-screen text-white p-8">

      <h1 className="text-3xl font-bold mb-8">
        Contest Standings
      </h1>
      <div className="mb-6 flex gap-4">

  <input
    type="text"
    placeholder="Enter Codeforces handle..."
    value={handle}
    onChange={(e) => setHandle(e.target.value)}
    className="px-4 py-2 bg-neutral-900 border border-neutral-700 rounded w-64"
  />

  <button
  onClick={handleSearch}
  disabled={searching}
  className="px-4 py-2 bg-green-600 text-black rounded flex items-center gap-2"
>

  {searching && (
    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
  )}

  {searching ? "Searching..." : "Search"}
  

</button>

{searching && (
  <p className="text-gray-400 mt-2">
    Searching handle... please wait
  </p>
)}

{error && (
  <p className="text-red-400 mt-2">
    {error}
  </p>
)}

</div>

      <table className="w-full border border-neutral-800">

        <thead>
          <tr className="bg-neutral-900">
            <th className="p-3">Rank</th>
            <th className="p-3">Handle</th>
            <th className="p-3">Points</th>
            <th className="p-3">Penalty</th>
          </tr>
        </thead>

        <tbody>
  {standings.map((user, index) => (
    <tr
      id={user.handle}
      key={index}
      className={`border-t border-neutral-800 ${
        user.handle.toLowerCase() === handle.toLowerCase()
          ? "bg-green-900"
          : ""
      }`}
    >
      <td className="p-3 text-center">{user.rank}</td>
      <td className="p-3 text-center">{user.handle}</td>
      <td className="p-3 text-center">{user.points}</td>
      <td className="p-3 text-center">{user.penalty}</td>
    </tr>
  ))}
</tbody>

      </table>

      <div className="flex justify-center items-center gap-2 mt-6">

  <button
    onClick={() => setPage(p => Math.max(p - 1, 1))}
    className="px-3 py-1 bg-neutral-800 rounded hover:bg-neutral-700"
  >
    Prev
  </button>

  {[...Array(5)].map((_, i) => {

    const pageNumber = page - 2 + i;

    if (pageNumber <= 0) return null;

    return (
      <button
        key={i}
        onClick={() => setPage(pageNumber)}
        className={`px-3 py-1 rounded ${
          pageNumber === page
            ? "bg-green-500 text-black"
            : "bg-neutral-800 hover:bg-neutral-700"
        }`}
      >
        {pageNumber}
      </button>
    );

  })}

  <button
    onClick={() => setPage(p => p + 1)}
    className="px-3 py-1 bg-neutral-800 rounded hover:bg-neutral-700"
  >
    Next
  </button>

</div>

    </div>
  );
}