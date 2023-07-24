import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import Image from "next/image";

export default async function Home() {

  const session = await getServerSession(options);
  const user = session?.user || null;

  return <>
    <h1>Home page</h1>
    {user && <>
      <h1>welcome {user.name}</h1>
      <Image className="rounded-[50%] mx-auto my-4" src={user.image} height={100} width={100} alt="display image" />
      <p>{user.email}</p>
    </>}
  </>

}

// {"name":"Brijendra Singh","email":"b122041@iiit-bh.ac.in","image":"https://lh3.googleusercontent.com/a/AAcHTteV-zE6NIOj8A5zk2Wo_aglZgQzO5m5qLr_n9-O6smA=s96-c"}