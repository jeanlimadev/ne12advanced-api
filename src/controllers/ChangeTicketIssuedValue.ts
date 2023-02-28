import { Request, Response } from "express";
import { prisma } from "../database";


class ChangeTicketIssuedValue {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { number } = request.params;

      const Invoice = await prisma.invoice.findFirst({
        where: {
          invoiceNumber: number
        }
      });

      if (!Invoice) {
        return response.status(404).json({ error: "Invoice not found!" });
      }

      const invoiceUpdated = await prisma.invoice.update({
        data: {
          ticketIssued: true
        },
        where: {
          id: Invoice.id
        }
      })

      return response.json(invoiceUpdated);
    } catch (error) {
      return response.status(500).json({ error: "Verify your request data!" });
    }
  }
}

export { ChangeTicketIssuedValue };