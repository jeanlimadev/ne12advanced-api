import { Request, Response } from "express";
import { prisma } from "../database";


class DeleteInvoiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { number } = request.params;

    const InvoiceAlreadyExists = await prisma.invoice.findFirst({
      where: {
        invoiceNumber: number,
      }
    });

    if (!InvoiceAlreadyExists) {
      return response.status(404).json({ error: "Invoice not found!" });
    }

    await prisma.invoice.delete({
      where: {
        id: InvoiceAlreadyExists.id
      }
    })

    return response.json({ message: `Invoice ${InvoiceAlreadyExists.invoiceNumber} deleted!` });
  }
}

export { DeleteInvoiceController };