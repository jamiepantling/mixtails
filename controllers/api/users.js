const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

module.exports = {
  signup,
  login,
  update,
};

async function signup(req, res) {
  try {

    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!(await bcrypt.compare(req.body.password, user.password)))
      throw new Error("Password incorrect");

    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

async function update(req, res) {
  try {
    const updatedUser = await User.findOneAndUpdate({ 
      email: req.body.email 
    }, {
      username: req.body.username || req.user.username,
      bio: req.body.bio || req.user.bio
    }, {
      new: true
    } )

    const token = jwt.sign({ updatedUser }, process.env.SECRET, { expiresIn: "24h" });
    console.log(token)
    res.status(200).json(token)
  } catch {
    res.status(400).json(`Update failed, try Again`);
  }
}
