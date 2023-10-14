import { options } from "@/app/api/auth/[...nextauth]/options";
import Retry from "@/components/Retry";
import Form from "@/components/form/form";
import ImageUpload from "@/components/profileImage/ImageUpload";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Roboto } from 'next/font/google'

const lilitaOne = Roboto({ subsets: ['greek'], weight: "700" });

export const metadata = {
  title: "Profile - CSE Bootcamp 2.0"
};

export default async function Page() {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const id = session.user.email.split('@')[0];
  const year = id[3];

  if (year !== '2' && year !== "3") {
    redirect('/');
  }

  return (
    <div className={"profile-container relative"}>
      <h1 className={"title no-select "+lilitaOne.className}>YOUR PROFILE</h1>
      <ImageUpload name={id} />
      <Form user={id} />
    </div>
  );
}