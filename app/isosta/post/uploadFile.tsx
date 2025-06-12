"use server";
import { promises as fs } from "node:fs";
import { resolve } from "node:path";
import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation'
const prisma = new PrismaClient();

export async function uploadFile(formData: FormData) {
    const file = formData.get("file") as File;
    const title = formData.get("title").toString();
    if (file && file.size > 0) {
        const data = await file.arrayBuffer();
        const buffer = Buffer.from(data);
        const fileName = `${crypto.randomUUID()}.${file.name.split(".").pop()}`;
        const filePath = resolve(
            process.cwd(),
            "./public/uploads",
            fileName,
        );
        await fs.writeFile(filePath, buffer);
        const itemData = { file: fileName, title: title };
        await prisma.post.create({
            data: itemData,
        });

    }
    revalidatePath("/");
    redirect('/isosta/');
}