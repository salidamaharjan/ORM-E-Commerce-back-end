const router = require("express").Router();
const { Category, Product } = require("../../models");
const { findOne } = require("../../models/Product");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  const allCatagories = await Category.findAll();
  res.status(200).json(allCatagories);
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  console.log(req.params);
  const categoryById = await Category.findOne({ where: { id: req.params.id } });
  res.status(200).json(categoryById);
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  // create a new category
  const newCategory = await Category.create(req.body);
  res.status(200).json(newCategory);
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  console.log(req.body);
  const updatedCategory = await Category.update(
    { category_name: req.body.category_name },
    { where: { id: req.params.id } }
  );
  res.status(200).json(updatedCategory);
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  const deleteCategory = await Category.destroy({
    where: {
      id: req.params.id
    },
  });
  res.status(200).json(deleteCategory);
});

module.exports = router;
