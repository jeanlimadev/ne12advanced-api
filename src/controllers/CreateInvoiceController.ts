import { Request, Response } from "express";
import { prisma } from "../database";

class CreateInvoiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        invoiceNumber,
        emission,
        amount,
        dueDate,
        recipient,
        documentNumber,
        address,
        district,
        city,
        uf,
        cep,
        accessKey,
      } = request.body;

      const InvoiceAlreadyExists = await prisma.invoice.findFirst({
        where: {
          invoiceNumber,
        },
      });

      if (InvoiceAlreadyExists) {
        return response
          .status(400)
          .json({ error: `Invoice ${invoiceNumber} already exists!` });
      }

      const Invoice = await prisma.invoice.create({
        data: {
          invoiceNumber,
          emission,
          amount,
          dueDate,
          recipient,
          documentNumber,
          address,
          district,
          city,
          uf,
          cep,
          accessKey,
          ticketIssued: false
        },
      });

      return response.status(201).json(Invoice);
    } catch (error) {
      return response.status(400).json({ error: "Verify your request data." });
    }
  }
}

export { CreateInvoiceController };
