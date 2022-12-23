import { Request, Response } from "express";
import { prisma } from "../database";


class ListInvoiceByNumber {
  async handle(request: Request, response: Response): Promise<Response> {
    const { number } = request.params;

    const Invoice = await prisma.invoice.findFirst({
      where: {
        invoiceNumber: number
      }
    });

    if (!Invoice) {
      return response.status(404).json({ error: "Invoice not found!" });
    }

    return response.json(Invoice);
  }
}

export { ListInvoiceByNumber };