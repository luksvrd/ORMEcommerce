// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsToMany(Category, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_category",
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "category_product",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_tag",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "tag_product",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
