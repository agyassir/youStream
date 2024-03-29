"use server";

import { FollowUser, UnfollowUser } from "@/lib/follow-service";
import { revalidatePath } from "next/cache";

export const onFollow= async (id:string)=>{
try {
    const followedUser = await FollowUser(id);

    revalidatePath("/");
    if(followedUser){
        revalidatePath(`/${followedUser.following.username}`);
    }

    return followedUser;
} catch (error) {
    throw new Error("Internal Error")
}
};

export const onUnfollow= async (id:string)=>{
try {
    const UnfollowedUser =await UnfollowUser(id);
revalidatePath("/");
if (UnfollowedUser) {
    revalidatePath(`/${UnfollowedUser.following.username}`)
}
return UnfollowedUser;
} catch (error) {
    throw new Error("Internal error")
}
}