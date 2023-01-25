const ProductModel = (sequelize, DataType) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataType.STRING,
      price: DataType.DECIMAL,
      urlImage: DataType.STRING,
    },

    {
      timestamps: false,
      underscored: true,
      tableName: "products",
    }
  );
  
  Product.associate = (models) => {
    Product.hasMany(models.SaleProduct, {
      as:'product',
      foreignKey: 'product_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  }

  return Product;
};

module.exports = ProductModel;
