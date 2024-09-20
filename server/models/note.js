const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");
const Note = sequelize.define(
  "Note",
  {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
  },
  {
    tableName: "notes",
    timestamps: true,
  }
);

module.exports = { Note };
