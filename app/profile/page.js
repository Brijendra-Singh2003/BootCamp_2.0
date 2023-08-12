import Form from "@/components/form/form"
import ImageUpload from "@/components/ImageUpload"

export default async function Page({searchParams: user}) {

  const id = user.email.split('@')[0];

  const response = await fetch(`https://cse-bootcamp-auth-default-rtdb.asia-southeast1.firebasedatabase.app/20${id.substring(2, 4)}/${id}.json`);
  const data = await response.json();

  return (
    <>
      <ImageUpload name={id} />
      <Form prevData={data} user={id} />
    </>
  )
};