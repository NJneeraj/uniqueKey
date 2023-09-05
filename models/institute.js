const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  sno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mtc_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instituteName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  centerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registration_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  valid_upto: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
    get() {
      const validUpto = new Date(this.getDataValue("registration_date"));
      validUpto.setFullYear(validUpto.getFullYear() + 1);
      return validUpto;
    },
  },
});

module.exports = User;
