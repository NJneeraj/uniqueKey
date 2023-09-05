const sequelize = require("./config/database");
const User = require("./models/user"); // Assuming your model file is in the same directory

(async () => {
  try {
    // Synchronize the model with the database to create the table
    await User.sync({ force: true }); // Use { force: true } to drop and recreate the table if it already exists

    console.log("User table has been created.");
  } catch (error) {
    console.error("Error creating User table:", error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
})();
