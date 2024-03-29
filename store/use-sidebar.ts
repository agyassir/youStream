import { OneTimeTokenIn } from "svix";
import {create} from "zustand";

interface SidebarStore{
    collapsed:boolean;
    OnExpand: ()=>void;
    OnCollapse: ()=>void;
};

export const UseSidebar= create<SidebarStore>( (set) => ({
    collapsed:false,
    OnExpand:()=>set(() =>({collapsed:false})),
    OnCollapse:()=>set(()=>({collapsed:true}))
}) )