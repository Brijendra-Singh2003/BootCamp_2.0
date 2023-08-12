import Form from "@/components/form/form"
import ImageUpload from "@/functions/ImageUpload"
import { redirect } from "next/navigation";

export default async function Page({searchParams: user}) {

  if(!user.email) {
    redirect('/');
  }
  const id = user.email.split('@')[0];
  let data = null;

  try {
    const response = await fetch(`https://cse-bootcamp-auth-default-rtdb.asia-southeast1.firebasedatabase.app/20${id.substring(2, 4)}/${id}.json`, {cache:'no-store'});
    data = await response.json();
  } catch (err) {}

  return (
    <>
      <ImageUpload name={id} />
      <Form prevData={data} user={id} />
    </>
  )
};