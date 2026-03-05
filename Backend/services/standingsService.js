import axios from "axios";

export const fetchStandings = async (contestId, page) => {

  const CF_API = process.env.CF_API_BASE;

  const count = 50;
  const from = (page - 1) * count + 1;

  const response = await axios.get(
    `${CF_API}/contest.standings`,
    {
      params: {
        contestId: contestId,
        from: from,
        count: count
      }
    }
  );

  const rows = response.data.result.rows;

  const standings = rows.map(row => ({
    rank: row.rank,
    handle: row.party.members[0].handle,
    points: row.points,
    penalty: row.penalty
  }));

  return standings;

};