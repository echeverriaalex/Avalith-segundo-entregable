'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Car, {
        foreignKey: "UserId"
      })
    }
  }
  User.init({
    firstname: DataTypes.STRING,    
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.prototype.toJSON =  function () {
    var values = Object.assign({}, this.get());

    delete values.password;
    return values;
  }

  return User;
};