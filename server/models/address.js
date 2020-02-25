'use strict';

export default function (sequelize, DataTypes) {
  const Address = sequelize.define('address', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    paranoid: true
  });

  Address.associate = function (models) {
    Address.belongsTo(models.user, {
      foreignKey: 'userId'
    });
  };
  return Address;
};