'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('Locations', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name can not be empty',
        },
      },
    },
    male: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Male count can not be empty',
        },
      },
    },
    female: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Female count can not be empty',
        },
      },
    },
  }, {});
  Locations.associate = (models) => {
    Locations.hasMany(models.Locations, { as: 'parentLocation', foreignKey: 'parentLocationId' }, { onDelete: 'set null', hooks: true });
  };
  return Locations;
};
