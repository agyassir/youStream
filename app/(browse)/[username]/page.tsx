import { isFollowingUser } from "@/lib/follow-service";
import { getUserbyUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";

interface UserPageProps{
params:{
username:string;
};
};



const UserPage=async ({
  params
}: UserPageProps)=> {

  const user= await getUserbyUsername(params.username);
  if(!user){
    notFound();
  }
  const isfollowing = await isFollowingUser(user.id);
    return (
  <div className='flex flex-col gap-y-4'>
<p>Username:{user.username}</p>
<p>User ID:{user.id}</p>
<p>is following:{`${isfollowing}`}</p>
<Actions userId={user.id} isfollowing={isfollowing}/>
 </div>
    )
  }

  export default UserPage;