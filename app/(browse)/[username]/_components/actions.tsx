"use client";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";
interface ActionsProps{
    isfollowing:boolean;
    userId: string;
};
export const Actions=({
    isfollowing,
    userId,
}:ActionsProps)=>{
   const [isPending, startTransition]= useTransition();
   
    const handlefollow=()=>{
        startTransition(()=>{
    onFollow(userId) 
    .then((data)=>toast.success(`you have started Followin  ${data.following.username}`))
    .catch(()=>toast.error("something went wrong"))
    ;
   });
}
    const handleUnfollow=()=>{
    startTransition(()=>{
onUnfollow(userId) 
.then((data)=>toast.success(`you have started Followin  ${data.following.username}`))
.catch(()=>toast.error("something went wrong"))
;
});
}
const Onclick=()=>{
    if(isfollowing){
        handleUnfollow();
    }else{
        handlefollow();
    }
}
   
    return(
        <Button disabled={isPending } onClick={Onclick} variant="primary">
           {isfollowing ? "unfollow" :"follow"} 
        </Button>
    );
};