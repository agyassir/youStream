"use client";

import { UseSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";

interface WrapperProps{
    children: React.ReactNode;  
};

export const Wrapper=({children, }:WrapperProps)=>{
    const {collapsed}=UseSidebar((state) => state);
return (
    <aside 
    className={cn("fixed flex flex-col w-60 h-full bg-background left-0 border-r border-[#2D2E35] z-50 ",
collapsed && "w-[70px]"

)}
    >
        {children}
    </aside>
)
}