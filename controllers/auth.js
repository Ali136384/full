import Mans from "../models/UsersSchema.js";
import bcrypt from "bcrypt";

export const AuthFun = async (req, res) => {
  try {
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
    const user = await Mans.findOne({ username: req.body.username });

    if (!user) {
      const newMan = await new Mans({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      await newMan.save();
      res.status(201).json({ message: "User created successfully" });
    } else {
      res.status(403).json({ message: "Try Another Username Please !" });
    }
  } catch (error) {
    console.error("Error while creating a new user:", error);
    res.status(500).json({ error: "User creation failed" });
  }
};

//////End register

/////Start Login

export const LoginFunc = async (req, res) => {
  try {
    const user = await Mans.findOne({ username: req.body.username });
    if (!user) {
      console.log("User Not Found");
      // Return an appropriate response to the client, indicating that the user was not found.
      return res.status(404).json({ message: "User Not Found" });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPasswordValid) {
      console.log("User Found");

      // Return a successful login response to the client.
      return res.status(200).json({ message: "User Found", user });
    } else {
      console.log("Incorrect Password");
      // Return a response indicating incorrect password to the client.
      return res.status(401).json({ message: "Incorrect Password" });
    }
  } catch (err) {
    console.log(err);
  }
};

export const addFavorite = async (req, res) => {
  try {
    const { username, favorites } = req.body;

    // Check if the post ID is already in the favorites array
    const user = await Mans.findOne({ username });
    if (user && user.favorites.includes(favorites)) {
      return res
        .status(400)
        .json({ msg: "Post ID already exists in favorites." });
    }

    // If the post ID is not in the favorites array, add it
    await Mans.updateOne(
      { username },
      {
        $push: {
          favorites: favorites,
        },
      }
    );

    res.status(200).json({ msg: "Added Successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "An error occurred." });
  }
};
