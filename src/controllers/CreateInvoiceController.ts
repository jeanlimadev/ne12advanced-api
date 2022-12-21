import { Request, Response } from "express";
import { prisma } from "../database";

class CreateInvoiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        invoiceNumber,
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

      const invoiceAlreadyExists = await prisma.invoice.findFirst({
        where: {
          invoiceNumber,
        },
      });

      if (invoiceAlreadyExists) {
        return response
          .status(400)
          .json({ error: `Invoice ${invoiceNumber} already exists!` });
      }

      const invoice = await prisma.invoice.create({
        data: {
          invoiceNumber,
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
        },
      });

      return response.status(201).json(invoice);
    } catch (error) {
      return response.status(400).json({ error: "Verify your request data." });
    }
  }
}

export { CreateInvoiceController };
