import express from "express";
import {getUserDetails, login, logout, register} from "../controllers/user.js";
import { authenticated } from "../middleware/auth.js";

const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/logout").get(logout);
router.route("/user/me").get(authenticated,getUserDetails);

export default router;