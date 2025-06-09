"use server"

import { auth } from "@/services/auth"
import { clientSchema } from "./schema"
import { db } from "@/services/database/prisma"
import { revalidatePath } from "next/cache";


interface ClientProps {
    username: string;
    email: string;
    phone: string;
}

export const createClient = async (data: ClientProps) => {
    console.log("createClient chamada com:", data); // Debug
    
    try {
        const validatedData = clientSchema.parse(data);
        console.log("Dados validados:", validatedData); // Debug
        
        const session = await auth();
        console.log("Sessão:", session); // Debug

        if (!session || !session.user?.id) {
            throw new Error("Você precisa estar logado para criar um cliente");
        }

        const client = await db.client.create({
            data: {
                userName: validatedData.username,
                email: validatedData.email,
                phone: validatedData.phone,
                userId: session.user.id
            },
        });

        console.log("Cliente criado:", client); // Debug
        revalidatePath("/app");
        
        return client;
    } catch (error) {
        console.error("Erro na createClient:", error);
        throw error;
    }
}

export const getClients = async () => {
    const session = await auth()

    if(!session || !session.user?.id) {
        return;
    }

    const clients = await db.client.findMany({
        where: {
            userId: session.user.id
        },
        select: {
            userName: true,
            email: true,
            phone: true
        },
    })

    return clients
}

// Atulizar o prisma, schema. prisma, migrate, generate, push
// schema.ts
//atualizar a interface e