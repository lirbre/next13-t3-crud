-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);
