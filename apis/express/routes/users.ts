import express from "express"
import userController from "../controllers/userController"
import { createUserValidator, updateUserValidator } from "../middlewares/userValidation"

const router = express.Router()

router.get("/", userController.getAllUsers)
router.post("/", createUserValidator, userController.createUser)
router.put("/:id", updateUserValidator, userController.updateUser)

export default router