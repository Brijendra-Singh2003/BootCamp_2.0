import Form from "@/components/form/form"
import ImageUpload from "@/functions/ImageUpload"
import { redirect } from "next/navigation";

export default async function Page({searchParams: user}) {

  if(!user.email) {
    redirect('/');
  }
  const id = user.email.split('@')[0];
  let data = {
    name: "",
    instagram: "",
    linkdin: "",
    github: "",
    about: "",
    id: id
  };

  const response = await fetch("https://csebootcamp2.varcel.app/api/db/get", {
    method:'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(id)
  })

  data = await response.json();

  return (
    <>
      <ImageUpload name={id} />
      <Form prevData={data} user={id}/>
    </>
  )
};