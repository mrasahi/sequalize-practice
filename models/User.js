const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class User extends Model { }

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'user' })

module.exports = User