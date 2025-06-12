"use server";
import { promises as fs } from "node:fs";
import { resolve } from "node:path";
import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation'
const prisma = new PrismaClient();

export async function uploadFile(formData: FormData) {
    const file = formData.get("file") as File;
    const posttitle = formData.get("posttitle").toString();
    const title = formData.get("title").toString();
    const director = formData.get("director").toString();
    const category = formData.get("category").toString();
    const way = formData.get("way").toString();
    const comment = formData.get("comment").toString();

    if (file && file.size > 0) {
        const data = await file.arrayBuffer();
        const buffer = Buffer.from(data);
        const fileName = `${crypto.randomUUID()}.${file.name.split(".").pop()}`;
        const filePath = resolve(
            process.cwd(),
            "./public/memovie_uploads",
            fileName,
        );
        await fs.writeFile(filePath, buffer);
        const itemData = { 
            posttitle: posttitle, 
            title: title, 
            director: director,
            category: category,
            way: way,
            comment: comment,
            file: fileName,
        };
        await prisma.review.create({
            data: itemData,
        });

    }
    revalidatePath("/");
    redirect('/memovie/');
}