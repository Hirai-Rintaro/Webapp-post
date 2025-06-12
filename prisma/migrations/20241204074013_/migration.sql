-- CreateTable
CREATE TABLE "guestBook" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "guestBook_pkey" PRIMARY KEY ("id")
);
