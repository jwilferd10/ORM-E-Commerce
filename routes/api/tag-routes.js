const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//==================//

// find all tags and be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll (
    {
      include: {
        model: Product
      }
    }
  )
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//==================//

// find a single tag by its `id` and be sure to include its associated Product data
// REMINDER: Needs to be further tested, I'm not sure if it'll work all the way or not
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: { 
      id: req.params.id
    },
    include: {
      model: Product
    }
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'There is NO tag name found with this id!!' });
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//==================//

// Create a new tag
router.post('/', (req, res) => {
  Tag.create ({
    tag_name: req.body.tag_name
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//==================//

// Update the name of a Tag by it's 'ID' value
router.put('/:id', (req, res) => {
  Tag.update (
    // Test: get tag_name from req.body
    { 
      tag_name: req.body.tag_name 
    },
    {
      where: { 
        id: req.params.id 
      }
    }
  )
  .then (dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'There is NO tag name found with this id!!' });
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//==================//

// Delete the tag by it's 'ID' value
router.delete('/:id', (req, res) => {
  Tag.destroy ({
    where: { 
      id: req.params.id 
    }
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'There is NO tag name found with this id!!' });
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;