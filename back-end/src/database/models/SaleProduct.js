const SaleProductModel = (sequelize, DataType) => {
  const SaleProduct = sequelize.define(
    'SaleProduct',
    {
      saleId: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      productId: {
        type: DataType.INTEGER,
        primaryKey: true,
      },
      quantity: DataType.INTEGER,
    },

    {
      timestamps: false,
      underscored: true,
      tableName: 'salesProducts',
    }
  );

  SaleProduct.associate = (models) => {
    SaleProduct.belongsTo(models.Sale, {
      as: 'sales',
      foreignKey: 'sale_id',
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    SaleProduct.belongsTo(models.Product, {
      as: 'products',
      foreignKey: 'product_id',
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  };

  return SaleProduct; 
};

module.exports = SaleProductModel;
