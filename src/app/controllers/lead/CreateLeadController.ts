import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class CreateLeadController {
  async handle(request: Request, response: Response) {
    const { name, email } = request.body;

    const leadAlreadyExists = await prismaClient.lead.findFirst({
      where: {
        email,
      },
    });

    if (leadAlreadyExists) {
      return response.status(200).json({
        message: "Usuário cadastrado!",
      });
    }

    const leadData = await prismaClient.lead.create({
      data: {
        name,
        email,
      },
    });

    return response.status(201).json({
      message: "Usuário cadastrado com sucesso!",
      results: leadData,
    });
  }
}
