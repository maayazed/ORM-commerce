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

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {

  } catch {

  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    
  } catch {
    
  }
});

module.exports = router;
