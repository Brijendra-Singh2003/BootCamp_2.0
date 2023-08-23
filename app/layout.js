import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import Script from 'next/script'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
}

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }) {

  const session = await getServerSession(options);

  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="fixed h-full w-full top-0 right-0 overflow-hidden z-[-10] pointer-events-none"><div id="spotlight"></div></div>
        <Navbar user={session?.user}/>
        <main>
          {children}
        </main>
        <ToastContainer/>
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" defer/>
      </body>
    </html>
  )
}
