const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const findAll = await Category.findAll({
      include: [{model: Product}],
    });

    res.status(200).json(findAll);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const findOne = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });

    if (!findOne) {
      res.status(404).json({message: `No category found with id: ${req.params.id}!`});
      return;
    };

    res.status(200).json(findOne);
  } catch {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);

    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json({category_name: 'Example'});
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const putCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!putCategory[0]) {
      res.status(404).json({message: `No category found with id: ${req.params.id}!`});
      return;
    };

    res.status(200).json(putCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const rmCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!rmCategory) {
      res.status(404).json({message: `No category found with id: ${req.params.id}!`});
      return;
    };

    res.status(200).json({message: `Category ${req.params.id} removed!`});
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
