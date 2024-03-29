import { db } from "@/lib/db";
import {getUser} from "@/lib/auth-service";
import { Users } from "lucide-react";

export const getRecommend = async ()=>{
    let userId;
    try{
    const self= await getUser();
userId=self.id;
    }catch{
        userId=null;
    }
    let users=[];
    if(userId){
        users=await db.user.findMany({
            where:{
            NOT:{
                id: userId,
                },
               },
               orderBy:{createdAt: "desc", 
            },
        }
        )
    } else{  
    
    users=await db.user.findMany({
        orderBy:{createdAt:"desc"},
    })

    }
    return users;
}