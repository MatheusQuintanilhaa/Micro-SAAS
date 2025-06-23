import { auth } from "@/services/auth";
import { db } from "@/services/database/prisma";
import { NextRequest, NextResponse } from "next/server";

export async  function POST (req: NextRequest) {
try {

    const session = await auth();
             console.log("Sessão:", session);

                if (!session || !session.user?.id) {
                    throw new Error("Você precisa estar logado para criar um cliente");
                }

        const { userName, email, phone } = await req.json();

    if(!userName || !phone || !email) {
    return NextResponse.json({ status: 404})
    }
    const user = await db.client.create({ data: { userName, email, phone, userId: session.user.id }})
return NextResponse.json({user})
} catch (error) {
    console.log(error)
} finally {
    await db.$disconnect()
}
}