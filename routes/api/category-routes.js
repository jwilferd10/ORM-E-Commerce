const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//==================//

// Find all the categories available
// Note: Unsure if findAll needs to be empty or have an include in it, Reminder to be sure to test this to see if any error pops up.
router.get('/', (req, res) => {
  Category.findAll ({
      include: {
        model: Product,
        attributes: ['product_name']
      }
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//==================//

// find one category by its `id` value, be sure to include its associated Products
router.get ('/:id', (req, res) => {
  Category.findOne ({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price'],
      },
    ],
  })
  .then ((dbCategoryData) => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'There is NO category name found with this id!!' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

//==================//

// Create a new category
router.post('/', (req, res) => {
  Category.create ({
    category_name: req.body.category_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//==================//

// Update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update (
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then (dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'There is NO category name found with this id!!' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//==================//

// Delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy ({
    where: { 
      id: req.params.id 
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'There is NO category name found with this id!!' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
