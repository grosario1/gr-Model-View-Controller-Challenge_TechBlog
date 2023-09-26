const router = require('express').Router();
const blogRoutes = require('./blog_routes');
const commentRoutes = require('./post_routes');
const userRoutes = require('./user_routes');

router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;