import Form from "@/components/form/form"
import ImageUpload from "@/components/ImageUpload"
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function Page() {

  const session = await getServerSession(options);
  const user = session.user.email.split('@')[0];

  const response = await fetch(`https://cse-bootcamp-auth-default-rtdb.asia-southeast1.firebasedatabase.app/20${user.substring(2, 4)}/${user}.json`);
  const data = await response.json();

  return (
    <>
      <ImageUpload name={user} />
      <Form prevData={data} user={user} />
    </>
  )
};