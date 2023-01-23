const UserModel = (sequelize, DataType) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
      },
      name: DataType.STRING,
      email: DataType.STRING,
      password: DataType.STRING,
      role: DataType.STRING,
    },

    {
      timestamps: false,
      underscored: true,
      tableName: "users",
    }
  );
  
  User.associate = (models) => {
    User.hasMany(models.Sale, {
      as:'sales',
      foreignKey: 'user_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

    User.hasMany(models.Sale, {
      as:'sales',
      foreignKey: 'seller_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  }

  return User;
};

module.exports = UserModel;
