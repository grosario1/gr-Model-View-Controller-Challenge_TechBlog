const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.json(blogs);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [
            User,
          ],
        },
      ],
    });

    if (!blogData) {
      res.status(404).json({ message: 'No Blog found with this id!' });
      return;
    }

    const blog = blogData.get({ plain: true });

    res.json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ['password'],
      },
      include: [
        {
          model: Blog,
        },
      ],
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }

    const user = userData.get({ plain: true });

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.status(200).json({ message: 'User is already logged in' });
    return;
  }

  res.status(401).json({ message: 'User is not logged in' });
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.status(200).json({ message: 'User is already signed up' });
    return;
  }

  res.status(401).json({ message: 'User is not signed up' });
});

module.exports = router;