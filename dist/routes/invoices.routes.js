"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoicesRoutes = void 0;
const express_1 = require("express");
const CreateInvoiceController_1 = require("../controllers/CreateInvoiceController");
const DeleteInvoiceController_1 = require("../controllers/DeleteInvoiceController");
const ListAllInvoicesController_1 = require("../controllers/ListAllInvoicesController");
const ListInvoiceByNumberController_1 = require("../controllers/ListInvoiceByNumberController");
const verifySecretKey_1 = require("../middlewares/verifySecretKey");
const invoicesRoutes = (0, express_1.Router)();
exports.invoicesRoutes = invoicesRoutes;
const createInvoiceController = new CreateInvoiceController_1.CreateInvoiceController();
const listAllInvoicescontroller = new ListAllInvoicesController_1.ListAllInvoicesController();
const listInvoiceByNumber = new ListInvoiceByNumberController_1.ListInvoiceByNumber();
const deleteInvoiceController = new DeleteInvoiceController_1.DeleteInvoiceController();
invoicesRoutes.post("/", verifySecretKey_1.verifySecretKey, createInvoiceController.handle);
invoicesRoutes.get("/", verifySecretKey_1.verifySecretKey, listAllInvoicescontroller.handle);
invoicesRoutes.get("/:number", verifySecretKey_1.verifySecretKey, listInvoiceByNumber.handle);
invoicesRoutes.delete("/:number", verifySecretKey_1.verifySecretKey, deleteInvoiceController.handle);
//# sourceMappingURL=invoices.routes.js.map