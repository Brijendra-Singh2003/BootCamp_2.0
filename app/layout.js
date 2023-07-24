import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'; import { options } from "./api/auth/[...nextauth]/options"
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
        <header>
          <Link href={'/'} >Home</Link>
          <div className='menu'>
            <div className="icon">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className='links'>
              <Link href={'/about'} >About</Link>
              {session ?
                <>
                  <Link href={'/students/2022'} >2022</Link>
                  <Link href={'/students/2021'} >2021</Link>
                  <Link href={'/api/auth/signout'} >Signout</Link>
                  <Link href={'/profile'} >Profile</Link>
                </> :
                <Link href={'/api/auth/signin/google'} >Login</Link>
              }
            </ul>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
