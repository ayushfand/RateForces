import axios from "axios";

export const fetchContests = async () => {

  const CF_API = process.env.CF_API_BASE;

  const response = await axios.get(
    `${CF_API}/contest.list?gym=false`
  );

  const contests = response.data.result;

  const upcoming = contests
    .filter(c => c.phase === "BEFORE")
    .slice(0, 5);

  const past = contests
    .filter(c => c.phase === "FINISHED")
    .slice(0, 5);

  return { upcoming, past };

};