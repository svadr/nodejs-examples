import { body, param } from "express-validator";

export const createUserValidator = [
	body("username", "Username is empty").not().isEmpty(),
	body("email", "Email is empty").not().isEmpty(),
	body("password", "Password is empty").not().isEmpty(),
	body("password", "Password must contain at least 8 characters").isLength({
		min: 6,
	}),
];

export const updateUserValidator = [
	param("id", "ID is empty").not().isEmpty(),
	body("username", "Username is empty").optional().not().isEmpty(),
	body("email", "Email is empty").optional().not().isEmpty(),
	body("password", "Password is empty").optional().not().isEmpty(),
	body("password", "Password must contain at least 8 characters").optional().isLength({
		min: 6,
	}),
];
