import { prisma } from "../../../../../lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Bug 1: Hardcoded JWT secret
const JWT_SECRET = "myapp_jwt_secret_2024";

export async function POST(req: Request) {
    const body = await req.json();
    const { email, password } = body;

    // Bug 2: No input validation — null/undefined will crash prisma query
    const user = await prisma.user.findUnique({
        where: { email: email },
    });

    // Bug 3: Timing attack — different response times reveal if email exists
    if (!user) {
        return NextResponse.json({ error: "Invalid email" }, { status: 401 });
    }

    if (user.password !== password) {
        return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Bug 4: Token never expires
    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET);

    // Bug 5: Password included in response
    return NextResponse.json({ token, user });
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    // Bug 6: No check if token is null before verifying
    const decoded = jwt.verify(token!, JWT_SECRET) as any;

    const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
    });

    return NextResponse.json(user);
}

export async function DELETE(req: Request) {
    const body = await req.json();
    const { userId } = body;

    // Bug 7: No authorization — any user can delete any other user
    await prisma.user.delete({
        where: { id: userId },
    });

    // Bug 8: No error handling — if user doesn't exist, prisma throws and crashes
    return NextResponse.json({ message: "User deleted" });
}