-- CreateTable
CREATE TABLE "messagingService" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "stamp" TEXT NOT NULL,
    "groupname" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messagingService_pkey" PRIMARY KEY ("id")
);
