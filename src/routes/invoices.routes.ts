import { Router } from "express";

import { CreateInvoiceController } from "../controllers/CreateInvoiceController";
import { ListAllInvoicesController } from "../controllers/ListAllInvoicesController";
import { ListInvoiceByNumber } from "../controllers/ListInvoiceByNumberController";
import { verifySecretKey } from "../middlewares/verifySecretKey";

const invoicesRoutes = Router();

const createInvoiceController = new CreateInvoiceController();
const listAllInvoicescontroller = new ListAllInvoicesController();
const listInvoiceByNumber = new ListInvoiceByNumber();

invoicesRoutes.post("/", verifySecretKey, createInvoiceController.handle);

invoicesRoutes.get("/", verifySecretKey, listAllInvoicescontroller.handle);

invoicesRoutes.get("/:number", verifySecretKey, listInvoiceByNumber.handle);

export { invoicesRoutes };