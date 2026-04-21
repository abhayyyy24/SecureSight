import { prisma } from "../../../../../lib/prisma";
import { NextResponse } from "next/server";

// Bug 1: Hardcoded secret in source code
const ADMIN_SECRET = "super-secret-admin-key-123";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    // Bug 2: No auth check — anyone can fetch any user's cameras
    const cameras = await prisma.camera.findMany({
        where: { userId: userId },
    });

    return NextResponse.json(cameras);
}

export async function DELETE(req: Request) {
    const body = await req.json();
    const { id, secret } = body;

    if (secret !== ADMIN_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Bug 3: No check if camera exists before deleting
    const deleted = await prisma.camera.delete({
        where: { id: id },
    });

    // Bug 4: No await — response sent before DB operation completes
    prisma.activityLog.create({
        data: { action: "camera_deleted", cameraId: id }
    });

    return NextResponse.json(deleted);
}

export async function PATCH(req: Request) {
    const body = await req.json();
    const { id, name, location } = body;

    // Bug 5: id is used directly with no validation — SQL/NoSQL injection risk
    const camera = await prisma.camera.update({
        where: { id: id },
        data: { name, location },
    });

    return NextResponse.json(camera);
}