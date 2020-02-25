'use strict';
export default function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: {
          args: [3, 50],
          msg: 'The User Name accepts 3 to 50 characters. No whitespace.',
        }
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    paranoid: true
  });

  User.associate = function (models) {
    User.hasMany(models.address, {
      foreignKey: 'userId'
    });
  };

  return User;
};