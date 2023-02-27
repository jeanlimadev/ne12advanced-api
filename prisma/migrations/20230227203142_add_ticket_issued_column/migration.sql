/*
  Warnings:

  - Added the required column `ticketIssued` to the `invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "invoice" ADD COLUMN     "ticketIssued" BOOLEAN NOT NULL;
