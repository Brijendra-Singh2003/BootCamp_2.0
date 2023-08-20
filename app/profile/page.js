import Retry from "@/components/Retry";
import Form from "@/components/form/form";
import ImageUpload from "@/functions/ImageUpload";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Profile - CSE Bootcamp 2.0",
  description: "",
};

export default async function Page({ searchParams: user }) {
  if (!user.email) {
    redirect("/api/auth/signin");
  }
  const id = user.email.split("@")[0];
  let data = {
    name: "",
    instagram: "",
    linkdin: "",
    github: "",
    about: "",
    id: id,
    year: Number.parseInt(id.at(3))
  };

  try {

    const loadTimeout = setTimeout(()=>{
      throw new Error('connection timed out');
    }, 5000);

    const response = await fetch(`${process.env.HOST}/api/db/get`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    });

    clearTimeout(loadTimeout);
    data = await response.json();
  
  } catch (err) {
    return <div><h1>{err.message}</h1><Retry>Retry</Retry></div>
  }

  return (
    <>
      <ImageUpload name={id} />
      <Form prevData={data} user={id} host={process.env.HOST} />
    </>
  );
}