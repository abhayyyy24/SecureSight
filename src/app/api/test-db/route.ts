import { prisma } from "../../../../lib/prisma";

export async function GET() {
    try {
        // Test database connection
        await prisma.$connect();
        
        // Test a simple query
        const result = await prisma.$queryRaw`SELECT 1 as test`;
        
        return new Response(JSON.stringify({ 
            status: 'success', 
            message: 'Database connection successful',
            result 
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("Database connection test failed:", error);
        
        return new Response(JSON.stringify({ 
            status: 'error',
            message: 'Database connection failed',
            error: error instanceof Error ? error.message : 'Unknown error',
            databaseUrl: process.env.DATABASE_URL ? 'Set' : 'Not set',
            directUrl: process.env.DIRECT_URL ? 'Set' : 'Not set'
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    } finally {
        await prisma.$disconnect();
    }
} 