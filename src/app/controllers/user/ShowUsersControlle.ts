import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class ShowUsersController {
  async handle(request: Request, response: Response) {

    const users = await prismaClient.user.findMany({});

    return response.json(users);
  }
}
