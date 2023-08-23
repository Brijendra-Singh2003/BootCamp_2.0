import { options } from "@/app/api/auth/[...nextauth]/options";
import Retry from "@/components/Retry";
import Form from "@/components/form/form";
import ImageUpload from "@/components/profileImage/ImageUpload";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Profile - CSE Bootcamp 2.0",
  description: "",
};

export default async function Page() {

  const session = await getServerSession(options);

  if(!session) {
    redirect('/api/auth/signin');
  }

  const id = session.user.email.split('@')[0];
  const year = id[3];

  if(year !== '2' && year !== '3') {
    redirect("/");
  }

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
    year: Number.parseInt(year)
  };

  try {
    const response = await fetch(`${process.env.HOST}/api/db?id=${id}`, {next: {tags: ['profile']}});
    data = await response.json() || data;

  } catch (err) {
    return <div className=" mt-52"><h1>Err: {err.message}</h1><Retry tag="profile">Retry</Retry></div>
  }

  return (
    <div className="profile-container relative">
      <ImageUpload name={id} src={data.image} host={process.env.HOST} />
      <Form prevData={data} user={id} host={process.env.HOST} />
    </div>
  );
}