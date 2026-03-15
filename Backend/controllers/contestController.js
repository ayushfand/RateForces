import { fetchContests } from "../services/contestService.js";

export const getContests = async (req, res) => {
  try {

    const contests = await fetchContests();

    res.json({
      success: true,
      data: contests
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Failed to fetch contests"
    });

  }
};