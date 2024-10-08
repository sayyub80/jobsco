import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import Image from "next/image";

 async  function Home() {
  const user = await currentUser();
  console.log(user);
  
  //user is authenticated--->profile info--> onboard as candidate or  recuiter
  //redirect this user to onboard
  const profileInfo =null;    //candidate or recuiter
  
  if(user && !profileInfo?.id) redirect('/onboard')
  return (
    <div className="">
      <h1>Home</h1> 
     </div>
  );
}

export default Home;
