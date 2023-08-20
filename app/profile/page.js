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
    name: '',
    about: '',
    state: '',
    city: '',
    instagram: '',
    github: '',
    linkedin: '',
    image: '',
    id: id,
    year: Number.parseInt(id.at(3))
  };

  try {

    const loadTimeout = setTimeout(()=>{
      throw new Error('connection timed out');
    }, 5000);

    const response = await fetch(`${process.env.HOST}/api/db?id=${id}`);

    clearTimeout(loadTimeout);
    data = await response.json() || data;
  
  } catch (err) {
    return <div><h1>{err.message}</h1><Retry>Retry</Retry></div>
  }

  return (
    <div className=" relative top-10">
      <ImageUpload name={id} host={process.env.HOST} />
      <Form prevData={data} user={id} host={process.env.HOST} />
    </div>
  );
}