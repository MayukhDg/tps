import { fetchUser } from "@/lib/actions/user.actions";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
 
export default async function Home() {
  
  const user = await currentUser();
  console.log(user);

  const loggedInUser = await fetchUser(user.id);


  if(!loggedInUser){
   const createUser =  async ()=>{
     const newUser = await createUser({
      name:user.firstName + user.lastName,
      id:user.id,
      image:user.imageUrl
     })
   }
   createUser();
  }

  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/sign-in"/>
    </div>
  )
}