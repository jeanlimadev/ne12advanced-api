import { Request, Response } from "express";
import { prisma } from "../database";


class DeleteInvoiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { number } = request.params;

    const invoiceAlreadyExists = await prisma.invoice.findFirst({
      where: {
        invoiceNumber: number,
      }
    });

    if (!invoiceAlreadyExists) {
      return response.status(404).json({ error: "Invoice not found!" });
    }

    await prisma.invoice.delete({
      where: {
        id: invoiceAlreadyExists.id
      }
    })

    return response.json({ message: `Invoice ${invoiceAlreadyExists.invoiceNumber} deleted!` });
  }
}

export { DeleteInvoiceController };