const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/user"); // Import the User model

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Define a POST route to add a new institute
app.post("/addInstitute", async (req, res) => {
  try {
    const { username, mtc_code, instituteName, address, centerName } = req.body;

    // Check if the institute already exists based on the provided mtc_code
    const existingInstitute = await User.findOne({ where: { mtc_code } });

    if (existingInstitute) {
      return res
        .status(400)
        .json({ error: "Institute with this MTC code already exists" });
    }

    // Create a new institute
    const newInstitute = await User.create({
      username,
      mtc_code,
      instituteName,
      address,
      centerName,
    });

    return res.status(201).json(newInstitute);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while adding the institute" });
  }
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
