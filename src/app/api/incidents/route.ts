import { prisma } from "../../../../lib/prisma";

export async function GET() {
    try {
        
        await prisma.$connect();
        
        
        return new Response(JSON.stringify(incidents), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } 
        
        
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