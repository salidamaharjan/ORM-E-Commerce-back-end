const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  const allTags = await Tag.findAll({
    include: {
      model: Product
    },
  });
  res.status(200).json(allTags);
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  const tagById = await Tag.findOne({
    where: { id: req.params.id },
    include: Product,
  });
  res.status(200).json(tagById);
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  // create a new tag
  const newTag = await Tag.create(req.body);
  res.status(200).json(newTag);
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  const updateTag = await Tag.update(
    { tag_name: req.body.tag_name },
    { where: { id: req.params.id } }
  );
  res.status(200).json(updateTag);
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  const deleteByID = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(deleteByID);
});

module.exports = router;
