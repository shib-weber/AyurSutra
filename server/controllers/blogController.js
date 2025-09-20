const Blog = require("../models/Blog");

const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};

module.exports = { getBlogs };
