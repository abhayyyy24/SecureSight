import {prisma} from "../../../../lib/prisma"
import { NextResponse } from "next/server"

export async function GET(){
    try {
        const incidents=await prisma.incident.findMany({
            where: {resolved:false},
            orderBy:{tsStart:'desc'},
            include:{camera:true}
        });
        return NextResponse.json(incidents,{status:200});
    }catch(error){
        console.error("error  fetching Incidents",error);
        return NextResponse.json({error:'Internal server error'},{status:500})
    }
}