import { Router } from "express";

const invoicesRoutes = Router();

invoicesRoutes.get("/", (request, response) => {
  return response.json({ message: "Hello World!" })
});

export { invoicesRoutes };