const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a new comment
router.post("/", withAuth, async (req, res) => {
  try {
    if (!req.body.comment_description || !req.body.blog_id) {
      return res.status(400).json({ message: "Comment description and blog ID are required" });
    }

    // Create a new comment with the user's ID and the provided data
    const newComment = await Comment.create({
      comment_description: req.body.comment_description,
      user_id: req.session.user_id,
      blog_id: req.body.blog_id,
    });

    // Return the newly created comment
    res.status(201).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create a comment" });
  }
});

module.exports = router;

