import {prisma} from "../../../../lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    try{
        const cameras =await prisma.camera.findMany();
        return NextResponse.json(cameras,{status:200});
    }catch(error){
        console.error('error fetching cameras:',error);
        return NextResponse.json({error:'Internal server error'},{status:500});
    }
}