import { fetchStandings } from "../services/standingsService.js";

export const getStandings = async (req, res) => {

  try {

    const { contestId } = req.params;
    const page = Number(req.query.page) || 1;

    const standings = await fetchStandings(contestId, page);

    res.json({
      success: true,
      data: standings
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Failed to fetch standings"
    });

  }

};