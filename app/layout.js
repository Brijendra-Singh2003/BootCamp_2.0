import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
//  heading - sora roboto | normal lato podkova
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

  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="fixed h-full w-full top-0 right-0 overflow-hidden z-[-10] pointer-events-none"><div id="spotlight"></div></div>
        <Navbar/>
        <main>
          {children}
        </main>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  )
}
