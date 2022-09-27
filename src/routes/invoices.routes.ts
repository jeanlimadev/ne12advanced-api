import { Router } from "express";

import { CreateInvoiceController } from "../controllers/CreateInvoiceController";

const invoicesRoutes = Router();

const createInvoiceController = new CreateInvoiceController();

invoicesRoutes.post("/", createInvoiceController.handle);

export { invoicesRoutes };