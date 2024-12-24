import express from "express";
import { userController } from "../controllers/usersController.js";
import { validator } from "../middlewares/validator.js";

const router = express.Router();

// add user
router.post("/", validator.validateBody, userController.addUser);

// log in
router.post("/logIn", userController.logIn);

// get user by id
router.get("/:id", userController.getUsereById);

export default router;
