import { prisma } from "../../../../../../lib/prisma";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function PATCH(req: NextRequest) {
  const urlParts = req.nextUrl.pathname.split("/");
  const id = urlParts[urlParts.length - 2];
  const incidentId = parseInt(id);

  if (isNaN(incidentId)) {
    return NextResponse.json({ error: "Invalid incident ID" }, { status: 400 });
  }

  try {
    const updated = await prisma.incident.update({
      where: { id: incidentId },
      data: { resolved: true },
    });
    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error("Error resolving incident:", error);
    return NextResponse.json({ error: "Incident not found or update failed" }, { status: 500 });
  }
}
