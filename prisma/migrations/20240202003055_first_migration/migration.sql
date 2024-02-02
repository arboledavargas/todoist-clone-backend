-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "superTaskId" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
