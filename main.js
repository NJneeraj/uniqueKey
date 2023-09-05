const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/user"); // Import the User model

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Register a new user (institute)
app.post("/register", async (req, res) => {
  try {
    const { username, instituteName, address, centerName } = req.body;
    console.log("haha");
    // Generate a unique MTC code
    let mtc_code;
    do {
      mtc_code = User.generateMTCCode();
    } while (await User.findOne({ where: { mtc_code } }));

    // Create a new user (institute) with the generated MTC code
    const newUser = await User.create({
      username,
      mtc_code,
      instituteName,
      address,
      centerName,
    });

    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
