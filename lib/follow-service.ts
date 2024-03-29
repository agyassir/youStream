import { db } from "@/lib/db";
import {getUser} from "@/lib/auth-service";
import { error } from "console";

export const isFollowingUser=async (id: string)=>{
    try {
      const self = await getUser();
      const otherUser  = await db.user.findUnique({
        where:{
            id
        },
      });
      if(!otherUser){
        throw new Error("User not found");
      };
      if(otherUser.id===self.id){
        return true;
      }
      const follwers=await db.follow.findFirst({
        where:{
            followerId:self.id,
            followingId:otherUser.id
        },
      });

      return !!follwers;


    } catch  {
        return false;
    };
};

export const FollowUser=async (id: string)=>{
  const self = await getUser();
 const otherUser= await db.user.findUnique({
  where:{
    id,
  },
 });
 if(!otherUser){
  throw new Error("User not found");
 }
 if(otherUser.id===self.id){
  throw new Error("are you going to follow yourself , are you nuts??");
 }
 const existingFollower=await db.follow.findFirst({
  where:{
    followerId:self.id,
    followingId:otherUser.id,
  },
 });
 if(existingFollower){
  throw new Error("Are you going to follow him twice???");
 };
const follow=await db.follow.create({
  data:{
    followerId:self.id,
    followingId:otherUser.id,
  },
  include:{
    following:true,
    Follower:true,
  },
});
return follow;
}

export const UnfollowUser=async (id: string)=>{
  const self = await getUser();
  const otherUser= await db.user.findUnique({
    where:{
      id,
    },
   });
   if(!otherUser){
    throw new Error("User not found");
   }
   if(otherUser.id===self.id){
    throw new Error("are you going to Unfollow yourself , are you nuts??");
   }
const existingFollow= await db.follow.findFirst({
  where:{
    followerId:self.id,
    followingId:otherUser.id,
  },
});

if(!existingFollow){
  throw new Error("are going to unfollow someone that you are not following????")
}
const unfollow=await db.follow.delete({
  where:{
    id:existingFollow.id,
  },
  include:{
    following:true,
  },
});
return unfollow;
}