"use client";

import qs from "query-string";
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { stringify } from "querystring";
export const Search = () =>{
const router = useRouter();
const [value,setValue]=useState("");
const onSubmit= (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!value) return;
            const url =  qs.stringifyUrl({
                url: "/search",
                query:{ term : value},
            },{skipEmptyString : true});

            router.push(url);
            setValue("");
};
const OnClear=()=>{
    setValue("");
}


    return (
          <form 
          onSubmit={onSubmit}
          className="relative  w-30 lg:w-[500px] flex items-center"
          >
              <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
                  className="  rounded-xl w-full  bg-transparent lg:bg-clip-padding px-3 py-[0.25rem]  font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-sky-500 dark:placeholder:text-sky-500 dark:focus:border-primary"
                  placeholder="Search"
                  />

              {value && (
                <X
                className="absolute left-[160px] lg:left-[425px] h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75"
                onClick={OnClear}
                />
              )}
             <Button 
             type="submit"
             size="sm"
             variant="secondary"
             className="rounded-l-none"
             >
                <SearchIcon className="h-5 w-5 text-muted-foreground text-sky-500"/>
             </Button>
          </form>
    )
}