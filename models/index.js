// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongsto Category, as a category can have multiple products but a product can only belong to one category.
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Category hasmany Product models.
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag, allow products to have multiple tags and tags to have many products.)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',

});

// Tags belongToMany Products (through ProductTag) allow products to have multiple tags and tags to have many products.
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = { Product, Category, Tag, ProductTag, };
