const router = require('express').Router();
const blogRoutes = require('./blog_routes');
const commentRoutes = require('./post_routes');
const userRoutes = require('./user_routes');
// const commentRoutes = require("./commentRoutes");
const authRoutes = require("./authRoutes");

router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);
router.use("/auth", authRoutes);

module.exports = router;

