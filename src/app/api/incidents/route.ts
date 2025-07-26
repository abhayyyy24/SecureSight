import { prisma } from "../../../../lib/prisma";

export async function GET() {
    try {
        // Test database connection first
        await prisma.$connect();
        
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
        console.error("Error fetching Incidents:", error);
        
        // Provide more specific error messages
        let errorMessage = 'Internal server error';
        if (error instanceof Error) {
            if (error.message.includes('Can\'t reach database server')) {
                errorMessage = 'Database connection failed';
            } else if (error.message.includes('Invalid `prisma')) {
                errorMessage = 'Database query error';
            }
        }
        
        return new Response(JSON.stringify({ 
            error: errorMessage,
            details: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : undefined
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    } finally {
        await prisma.$disconnect();
    }
}