const router = require("express").Router();
const { User } = require("../../models");

// Route for user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Both email and password are required" });
    }

    const userData = await User.findOne({ where: { email } });

    if (!userData || !(await userData.checkPassword(password))) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for user signup
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    const newUser = await User.create({
      username,
      email,
      password,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(201).json({ user: newUser, message: "You are now signed up and logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for user logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;