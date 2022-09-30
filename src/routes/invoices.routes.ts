import { Router } from "express";

import { CreateInvoiceController } from "../controllers/CreateInvoiceController";
import { DeleteInvoiceController } from "../controllers/DeleteInvoiceController";
import { ListAllInvoicesController } from "../controllers/ListAllInvoicesController";
import { ListInvoiceByNumber } from "../controllers/ListInvoiceByNumberController";
import { verifySecretKey } from "../middlewares/verifySecretKey";

const invoicesRoutes = Router();

const createInvoiceController = new CreateInvoiceController();
const listAllInvoicescontroller = new ListAllInvoicesController();
const listInvoiceByNumber = new ListInvoiceByNumber();
const deleteInvoiceController = new DeleteInvoiceController();

invoicesRoutes.post("/", verifySecretKey, createInvoiceController.handle);

invoicesRoutes.get("/", verifySecretKey, listAllInvoicescontroller.handle);

invoicesRoutes.get("/:number", verifySecretKey, listInvoiceByNumber.handle);

invoicesRoutes.delete("/:number", verifySecretKey, deleteInvoiceController.handle);

export { invoicesRoutes };