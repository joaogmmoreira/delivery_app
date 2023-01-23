const SaleModel = (sequelize, DataType) => {
  const Sale = sequelize.define(
    "Sale",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
      },
      userId: DataType.INTEGER,
      sellerId: DataType.INTEGER,
      totalPrice: DataType.DECIMAL,
      deliveryAddress: DataType.STRING,
      deliveryNumber: DataType.STRING,
      saleDate: DataType.DATE,
      status: DataType.STRING,
    },

    {
      timestamps: false,
      underscored: true,
      tableName: "sales",
    }
  );
  
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      as:'users',
      foreignKey: 'user_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
    Sale.belongsTo(models.User, {
      as:'sellers',
      foreignKey: 'seller_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  }

  return Sale;
};

module.exports = SaleModel;
