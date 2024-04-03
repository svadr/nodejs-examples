import { Request, Response } from "express";
import User from "../models/user";
import { randomUUID } from "crypto";
import { validationResult } from "express-validator";

enum HttpStatus {
	Ok = 200,
	Created = 201,
	BadRequest = 400,
	NotFound = 404,
}

interface MessageResponse {
	Message: string;
}

const users: User[] = [];

function validationErrors(req: Request, res: Response): boolean {
    const result = validationResult(req)
    if (!result.isEmpty()) {
		res.status(HttpStatus.BadRequest).json({ errors: result.array() });
        return true;
	}

    return false;
}

const userController = {
	getAllUsers(req: Request, res: Response) {
		res.status(HttpStatus.Ok).json(users);
	},
	createUser(req: Request, res: Response) {
		if (validationErrors(req, res)) {
            return
        }

        const newUser: User = {
			ID: randomUUID(),
			Username: req.body.username,
			Email: req.body.email,
			Password: req.body.password,
            CreatedAt: new Date()
		};

		users.push(newUser);
		const msg: MessageResponse = { Message: "User created successfully" };
		res.status(HttpStatus.Created).json(msg);
	},
	updateUser(req: Request, res: Response) {
        if (validationErrors(req, res)) {
            return
        }

        const foundUser = users.findIndex(user => user.ID === req.params.id)
        console.log("🚀 ~ updateUser ~ foundUser:", foundUser)

        if (foundUser < 0) {
            const msg: MessageResponse = {Message: "User not found"}
            res.status(HttpStatus.NotFound).json(msg)
            return
        }


        users[foundUser] = {
            ...users[foundUser],
            Username: req.body.username,
            Password: req.body.password,
            Email: req.body.email,
        }

        const msg: MessageResponse = {Message: "User updated successfully"}
        res.status(HttpStatus.Ok).json(msg)
    },
};

export default userController;
