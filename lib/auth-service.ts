import { currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";


export const getUser=async ()=>{
    const self = await currentUser();

    if(!self || !self.username){
        throw new Error("UNAUTHORIZED");
    }
    const user = await db.user.findUnique({
        where:{externalId:self.id }
    });
    if(!user){
        throw new Error("Not found");
    }
    return user;
}