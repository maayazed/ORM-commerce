const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const findAll = await Tag.findAll({
      include: [{model: Product}],
    });

    res.status(200).json(findAll);
  } catch (err) {
    res.status(500).json(err);
    // console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const findOne = await Tag.findByPk(req.params.id, {
      include: [{model: Product}],
    });

    if (!findOne) {
      res.status(404).json({message: `No tag found with id: ${req.params.id}!`});
      return;
    };

    res.status(200).json(findOne);
  } catch (err) {
    res.status(500).json(err);
    // console.log(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);

    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const putTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!putTag[0]) {
      res.status(404).json({message: `No tag found with id: ${req.params.id}!`});
      return;
    }

    res.status(200).json(putTag);
  } catch (err) {

    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const rmTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!rmTag) {
      res.status(404).json({message: `No tag found with id: ${req.params.id}!`});
      return;
    };

    res.status(200).json({message: `Tag ${req.params.id} removed!`});
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
