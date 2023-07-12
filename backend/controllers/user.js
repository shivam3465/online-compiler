import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import { setCookie } from "../utils/setCookies.js";
import { showError } from "../utils/showError.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const matched = await bcrypt.compare(password, user.password);
      if (matched) {
        const id = jwt.sign(user.id, process.env.SECRET_KEY);
        setCookie(res, 200, "token", id, 6000000, `Welcome back ${user.name}`);
      } else {
        showError(res, 400, "Wrong email or password");
      }
    } else {
      showError(res, 400, "Wrong email or password");
    }
  } catch (error) {
    showError(res, 400, error.message);
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      showError(res, 400, "Email already registered");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      const id = jwt.sign(newUser.id, process.env.SECRET_KEY);
      setCookie(res, 200, "token", id, 6000000, "Registration successful");
    }
  } catch (error) {
    showError(res, 400, error.message);
  }
};

const logout = (req, res) => {
  setCookie(res, 200, "token", "", 0, "Logged out successfully");
};

const getUserDetails = async (req, res) => {
  const user = await User.findOne({}).select("-email -password");
  res.json({ success: true, user });
};

export { login, logout, getUserDetails, register };
