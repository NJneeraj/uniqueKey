const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/user");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Add CORS middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("Yeah");
});

app.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const { username, instituteName, address, centerName } = req.body;
    console.log(username, instituteName, address, centerName);
    let mtc_code;
    // do {
    mtc_code = User.generateMTCCode();
    // } while (await User.findOne({ where: { mtc_code } }));

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
