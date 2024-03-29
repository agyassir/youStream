import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
const font=Poppins({
    subsets: ["latin"],
    weight: ["200","300","400","500","600","700","800"],
});
export const Logo = () =>{
    return (
<Link href="/">
        <div className="flex items-center gap-x-4 hover:opacity-70 transition">
            <div className="bg-sky-500 rounded-full p-1 mr-2">
           <Image src="/spooky.svg"
           width="32"
           height="32"
           alt="youTwitch"
           />
            </div>
            <div className={cn(
                "hidden  lg:block",
                font.className)}>
            <p className="text-lg font-bold ">YouStream</p>
            <p className="text-xs text-muted-foreground text-sky-500">Made in YouCode</p>
            </div>
        </div>
        </Link>
    )
}