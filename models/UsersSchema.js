import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  favorites: {
    type: Array,
  },
});

const Mans = mongoose.model("Loginers", UserSchema);

// Export the User model
export default Mans;
