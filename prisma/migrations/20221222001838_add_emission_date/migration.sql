/*
  Warnings:

  - Added the required column `emission` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Invoice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "invoiceNumber" TEXT NOT NULL,
    "emission" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "dueDate" TEXT NOT NULL,
    "recipient" TEXT NOT NULL,
    "documentNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "accessKey" TEXT NOT NULL
);
INSERT INTO "new_Invoice" ("accessKey", "address", "amount", "cep", "city", "district", "documentNumber", "dueDate", "id", "invoiceNumber", "recipient", "uf") SELECT "accessKey", "address", "amount", "cep", "city", "district", "documentNumber", "dueDate", "id", "invoiceNumber", "recipient", "uf" FROM "Invoice";
DROP TABLE "Invoice";
ALTER TABLE "new_Invoice" RENAME TO "Invoice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
