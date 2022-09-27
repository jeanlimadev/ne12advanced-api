import { Router } from "express";

import { CreateInvoiceController } from "../controllers/CreateInvoiceController";
import { ListAllInvoicesController } from "../controllers/ListAllInvoicesController";

const invoicesRoutes = Router();

const createInvoiceController = new CreateInvoiceController();
const listAllInvoicescontroller = new ListAllInvoicesController();

invoicesRoutes.post("/", createInvoiceController.handle);

invoicesRoutes.get("/", listAllInvoicescontroller.handle);

export { invoicesRoutes };