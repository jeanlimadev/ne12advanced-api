import { Router } from "express";
import { invoicesRoutes } from "./invoices.routes";

const router = Router();

router.use("/invoices", invoicesRoutes);

export { router };