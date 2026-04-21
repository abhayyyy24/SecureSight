import { prisma } from "../../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const body=await req.json()
    const {name, location, apiKey}=body

    // Bug 1: API key exposed in logs (security issue)
    console.log('Request received:', name, location, apiKey)

    // Bug 2: No trim — "   " passes the check but is useless data
    if(!name||!location){
        return NextResponse.json({error:'Name and location are required'},{status:400});
    }

    // Bug 3: No validation on length — someone can send 10MB string as name
    
    try{
        const camera=await prisma.camera.create({
            data:{name,location},
        });

        // Bug 4: Returns raw DB object including internal fields — should only return safe fields
        return NextResponse.json(camera,{status:200});

    }catch(error){
        // Bug 5: Leaks internal error details to client — exposes DB structure
        return NextResponse.json({error: error},{status:500});
    }
}