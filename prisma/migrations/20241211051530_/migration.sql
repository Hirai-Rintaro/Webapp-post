-- CreateTable
CREATE TABLE "shoppingList" (
    "id" SERIAL NOT NULL,
    "item" TEXT NOT NULL,
    "maker" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "stock" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "shoppingList_pkey" PRIMARY KEY ("id")
);
