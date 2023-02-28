import { Router } from "express";
import { ChangeTicketIssuedValue } from "../controllers/ChangeTicketIssuedValue";

import { CreateInvoiceController } from "../controllers/CreateInvoiceController";
import { DeleteInvoiceController } from "../controllers/DeleteInvoiceController";
import { ListAllInvoicesController } from "../controllers/ListAllInvoicesController";
import { ListInvoiceByNumber } from "../controllers/ListInvoiceByNumberController";
import { verifySecretKey } from "../middlewares/verifySecretKey";

const invoicesRoutes = Router();

const createInvoiceController = new CreateInvoiceController();
const listAllInvoicesController = new ListAllInvoicesController();
const listInvoiceByNumber = new ListInvoiceByNumber();
const changeTicketIssuedValue = new ChangeTicketIssuedValue();
const deleteInvoiceController = new DeleteInvoiceController();

invoicesRoutes.post("/", verifySecretKey, createInvoiceController.handle);

invoicesRoutes.get("/", verifySecretKey, listAllInvoicesController.handle);

invoicesRoutes.get("/:number", verifySecretKey, listInvoiceByNumber.handle);

invoicesRoutes.patch("/:number", verifySecretKey, changeTicketIssuedValue.handle);

invoicesRoutes.delete("/:number", verifySecretKey, deleteInvoiceController.handle);

export { invoicesRoutes };