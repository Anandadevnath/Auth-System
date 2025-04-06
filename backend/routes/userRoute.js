import express from "express";
import { createUser, loginUser, logoutUser } from "../controller/userController.js";

const router = express.Router()

// Adding a user routes
router.route('/register').post(createUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)


export default router;