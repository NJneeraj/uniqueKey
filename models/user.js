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
    type: DataTypes.STRING(12), // 3 chars + 2 digits + 3 chars + 4 digits
    allowNull: false,
    unique: true, // Ensure uniqueness
    validate: {
      is: /^[A-Z]{3}[0-9]{2}[A-Z]{3}[0-9]{4}$/, // Validate the format
    },
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

// Function to generate a random MTC code with the specified format
User.generateMTCCode = () => {
  const generateRandomString = (length, characters) => {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
    generateRandomString(3, "ABCDEFGHIJKLMNOPQRSTUVWXYZ") +
    generateRandomString(2, "0123456789") +
    generateRandomString(3, "ABCDEFGHIJKLMNOPQRSTUVWXYZ") +
    generateRandomString(4, "0123456789")
  );
};

module.exports = User;
