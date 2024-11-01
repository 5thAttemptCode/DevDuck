-- CreateTable
CREATE TABLE "ColorPreferences" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bodyColor" TEXT NOT NULL DEFAULT '#0000ff',
    "beekColor" TEXT NOT NULL DEFAULT '#ffa500',
    "eyeColor" TEXT NOT NULL DEFAULT '#141414',
    "backgroundColor" TEXT NOT NULL DEFAULT '#ffffff',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ColorPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ColorPreferences_userId_key" ON "ColorPreferences"("userId");

-- AddForeignKey
ALTER TABLE "ColorPreferences" ADD CONSTRAINT "ColorPreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
