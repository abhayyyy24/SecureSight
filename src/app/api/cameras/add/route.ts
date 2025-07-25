import { prisma } from "../../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const body=await req.json()
    const {name,location}=body

    if(!name||!location){
        return NextResponse.json({error:'Name and location are required'},{status:400});
    }
    try{
        const camera=await prisma.camera.create({
            data:{name,location},
        });
        return NextResponse.json(camera,{status:200});
    }catch(error){
        console.error('Error creating camera:',error)
        return NextResponse.json({error:'Internal server error'},{status:500});
    }
}