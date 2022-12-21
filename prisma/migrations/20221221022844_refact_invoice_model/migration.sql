/*
  Warnings:

  - You are about to drop the column `pfOrPj` on the `Invoice` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.
  - Added the required column `city` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Invoice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "invoiceNumber" TEXT NOT NULL,
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
INSERT INTO "new_Invoice" ("accessKey", "address", "amount", "cep", "documentNumber", "dueDate", "id", "invoiceNumber", "recipient") SELECT "accessKey", "address", "amount", "cep", "documentNumber", "dueDate", "id", "invoiceNumber", "recipient" FROM "Invoice";
DROP TABLE "Invoice";
ALTER TABLE "new_Invoice" RENAME TO "Invoice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
