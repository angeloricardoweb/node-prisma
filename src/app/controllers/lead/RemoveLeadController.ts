import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class RemoveLeadController {
  async handle(request: Request, response: Response) {
    const id: string = request.params.id;

    if (!id) return response.status(400).json({ message: "ID não informado!" });

    const leader = await prismaClient.lead.findFirst({
      where: {
        id,
      },
    });

    if (!leader) {
      return response.status(404).json({
        message: "Usuário não encontrado!",
      });
    }

    await prismaClient.lead.delete({
      where: {
        id,
      },
    });

    return response.status(200).json({
      message: "Usuário removido com sucesso!",
    });
  }
}
