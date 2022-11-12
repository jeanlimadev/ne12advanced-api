-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "invoiceNumber" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "dueDate" TEXT NOT NULL,
    "recipient" TEXT NOT NULL,
    "pfOrPj" TEXT NOT NULL,
    "documentNumber" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "accessKey" TEXT NOT NULL
);
