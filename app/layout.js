import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Get In Touch",
  description: "created with ❤️ by Brijendra Singh",
};

export default async function RootLayout({ children }) {

  let session = false;
  session = await getServerSession(options);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar className={'fixed w-full top-0'} user={session?.user}/>
        <main className=' mt-20'>
          {children}
        </main>
      </body>
    </html>
  )
}
