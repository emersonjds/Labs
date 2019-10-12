const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    console.log(req.io, req.connectedUsers);
    const { devId } = req.params;
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return res.status(400).json({
        error: "Dev not exists"
      });
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      console.log("Deu Match");
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
};
