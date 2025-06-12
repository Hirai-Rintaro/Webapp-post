-- CreateTable
CREATE TABLE "boughtList" (
    "id" SERIAL NOT NULL,
    "item" TEXT NOT NULL,
    "count" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "boughtList_pkey" PRIMARY KEY ("id")
);
