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
exports.DeleteInvoiceController = void 0;
const database_1 = require("../database");
class DeleteInvoiceController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { number } = request.params;
            const InvoiceAlreadyExists = yield database_1.prisma.invoice.findFirst({
                where: {
                    invoiceNumber: number,
                }
            });
            if (!InvoiceAlreadyExists) {
                return response.status(404).json({ error: "Invoice not found!" });
            }
            yield database_1.prisma.invoice.delete({
                where: {
                    id: InvoiceAlreadyExists.id
                }
            });
            return response.json({ message: `Invoice ${InvoiceAlreadyExists.invoiceNumber} deleted!` });
        });
    }
}
exports.DeleteInvoiceController = DeleteInvoiceController;
//# sourceMappingURL=DeleteInvoiceController.js.map