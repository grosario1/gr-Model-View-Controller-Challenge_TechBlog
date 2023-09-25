const express = require("express");
const router = express.Router();
const { User, Post, Comment } = require("../models");

// Homepage route
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    res.render("home", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login page route
router.get("/login", (req, res) => {
  res.render("login");
});

// Signup page route
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Dashboard route 
router.get("/dashboard", async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect("/login");
      return;
    }

    const user = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Post,
          attributes: ["id", "title", "content", "createdAt"],
        },
      ],
    });

    res.render("dashboard", { user, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// blog post page route
router.get("/post/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });

    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    res.render("post", { post, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
