import { Request, Response } from "express";
import { prisma } from "../database";


class ListAllInvoicesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const allInvoices = await prisma.invoice.findMany();

    return response.json(allInvoices);
  }
}

export { ListAllInvoicesController };