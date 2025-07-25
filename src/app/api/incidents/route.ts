import { prisma } from "../../../../lib/prisma";
export async function GET() {
    try {
        const incidents = await prisma.incident.findMany({
            where: { resolved: false },
            orderBy: { tsStart: 'desc' },
            include: { camera: true }
        });
        return new Response(JSON.stringify(incidents), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("error  fetching Incidents", error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}