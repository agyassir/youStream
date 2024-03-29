"use client";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UseSidebar } from "@/store/use-sidebar";
import { Hint } from "@/components/hint";
import { Skeleton } from "@/components/ui/skeleton";



export const Toggle = ()=>{
const {
    collapsed,
    OnCollapse,
    OnExpand
}= UseSidebar((state)=>state);
const Label = collapsed ? "Expand" : "Collapse";
    
    
    return(
<>
    {!collapsed && 
    <div className="p-3 pl-6 mb-2 flex items-center w-full ">
   <p className="font-semibold text-primary">For you !!
   </p>
<Hint label={Label} side="right" asChild>
   <Button
    onClick={OnCollapse}
    className="h-auto p-2 ml-auto"
     variant="ghost">
    <ArrowLeftFromLine className="h-4 w-4"/>
   </Button>
   
   </Hint>
   </div>
    }
     {collapsed && 
    <div className="hidden lg:flex items-center justify-center w-full ">
   <Hint label={Label} side="right" asChild>
   <Button
    onClick={OnExpand}
    className="h-auto p-2 mt-3"
     variant="ghost">
    <ArrowRightFromLine className="h-4 w-4"/>
   </Button>
   </Hint>
   
   </div>
    }
</>
    );
};

export const ToggleSkeleton = () => {
    return (
      <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
        <Skeleton className="h-6 w-[100px]" />
        <Skeleton className="h-6 w-6" />
      </div>
    );
  };