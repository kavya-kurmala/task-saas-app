const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  status: {
    type: DataTypes.ENUM("Pending", "Completed"),
    defaultValue: "Pending"
  }
});

User.hasMany(Task, {
  foreignKey: "userId",
  onDelete: "CASCADE"
});

Task.belongsTo(User, {
  foreignKey: "userId"
});

module.exports = Task;