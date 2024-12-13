import Routine from "../models/routine.model.js";

export const getRoutines = async (req, res) => {
  try {
    const userId = req.session.user.userId;
    const userRoutines = await Routine.find({ userId });
    if (!userRoutines) {
      res.status(401).json({
        error: "No Routines Found For This User",
        success: false,
        data: null,
      });
      return;
    }
    res.status(200).json({
      error: null,
      success: true,
      data: userRoutines,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
      success: false,
      data: null,
    });
  }
};
export const addRoutine = async (req, res) => {
  const routine = req.body;
  const newRoutine = new Routine(routine);
  try {
    await newRoutine.save();
    res.status(200).json({
      error: null,
      success: true,
      data: routine,
    }); 
  } catch (error) {
    res.status(400).json({
      error: error,
      success: false,
      data: null,
    });
  }
};
