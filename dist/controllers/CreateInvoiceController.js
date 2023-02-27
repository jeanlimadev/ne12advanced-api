"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvoiceController = void 0;
const database_1 = require("../database");
class CreateInvoiceController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { invoiceNumber, emission, amount, dueDate, recipient, documentNumber, address, district, city, uf, cep, accessKey, } = request.body;
                const InvoiceAlreadyExists = yield database_1.prisma.invoice.findFirst({
                    where: {
                        invoiceNumber,
                    },
                });
                if (InvoiceAlreadyExists) {
                    return response
                        .status(400)
                        .json({ error: `Invoice ${invoiceNumber} already exists!` });
                }
                const Invoice = yield database_1.prisma.invoice.create({
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
                    },
                });
                return response.status(201).json(Invoice);
            }
            catch (error) {
                return response.status(400).json({ error: "Verify your request data." });
            }
        });
    }
}
exports.CreateInvoiceController = CreateInvoiceController;
//# sourceMappingURL=CreateInvoiceController.js.map