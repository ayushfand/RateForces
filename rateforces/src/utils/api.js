const API_BASE = import.meta.env.VITE_API_BASE;

export const getContests = async () => {
  const res = await fetch(`${API_BASE}/contests`);
  const data = await res.json();
  return data.data;
};

export const getStandings = async (contestId, page = 1) => {

  const res = await fetch(
    `${API_BASE}/contest/${contestId}?page=${page}`
  );
  const data = await res.json();

  return data.data;

};