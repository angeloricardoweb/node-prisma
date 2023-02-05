import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class ListLeadController {
  async handle(request: Request, response: Response) {
    const leaders = await prismaClient.lead.findMany({});

    return response.status(200).json(leaders);
  }
}
