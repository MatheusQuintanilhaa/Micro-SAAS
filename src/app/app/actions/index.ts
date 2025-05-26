"use server"

import { auth } from "@/services/auth"
import { clientSchema } from "./schema"
import { db } from "@/services/database/prisma"
import { revalidatePath } from "next/cache";


interface ClientProps {
    username: string;
}

export const createClient = async (data: ClientProps) => {
    clientSchema.parse(data)
    const session = await auth()

    if(!session || !session.user?.id) {
        return;
    }

    const clients = await db.client.create({
        data: {
            userName: data.username,
            userId: session.user.id
        },

    })
    revalidatePath("/app")
    return clients
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
            userName: true
        },
    })

    return clients
}


// Atulizar o prisma, schema. prisma, migrate, generate, push
// schema.ts
//atualizar a interface e