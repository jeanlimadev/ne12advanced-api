"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const invoices_routes_1 = require("./invoices.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use("/invoices", invoices_routes_1.invoicesRoutes);
//# sourceMappingURL=index.js.map