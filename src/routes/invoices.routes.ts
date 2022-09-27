import { Router } from "express";

import { CreateInvoiceController } from "../controllers/CreateInvoiceController";
import { ListAllInvoicesController } from "../controllers/ListAllInvoicesController";
import { ListInvoiceByNumber } from "../controllers/ListInvoiceByNumberController";

const invoicesRoutes = Router();

const createInvoiceController = new CreateInvoiceController();
const listAllInvoicescontroller = new ListAllInvoicesController();
const listInvoiceByNumber = new ListInvoiceByNumber();

invoicesRoutes.post("/", createInvoiceController.handle);

invoicesRoutes.get("/", listAllInvoicescontroller.handle);

invoicesRoutes.get("/:number", listInvoiceByNumber.handle);

export { invoicesRoutes };