const express = require("express");
const router = express.Router();
const { Post, Comment, User } = require("../models");

// Get all blog posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.findAll({
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
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new blog post
router.post("/posts", async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id, 
    });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a blog post by ID
router.delete("/posts/:id", async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id, 
      },
    });
    if (!deletedPost) {
      res.status(404).json({ message: "Post not found" });
      return;
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
