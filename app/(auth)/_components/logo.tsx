import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font=Poppins({
    subsets: ["latin"],
    weight: ["200","300","400","500","600","700","800"],
});
export const Logo = () =>{
    return (

        <div className="flex flex-col items-center gap-y-4">
            <div className="bg-blue-600 rounded-full p-1">
           <Image src="/spooky.svg"
           width="80"
           height="80"
           alt="youTwitch"
           />
            </div>
        </div>
    )
}