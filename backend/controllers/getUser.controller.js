import User from "../models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const fillerUser = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );

    return res.status(200).json(fillerUser);
  } catch (error) {
    console.log("Error in getUser Controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
