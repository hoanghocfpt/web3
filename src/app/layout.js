import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900' ] ,subsets: ['latin'] })

export const metadata = {
  title: 'Frenzland',
  description: 'Frenzland is a social network for friends.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} , bg-neutral-950 py-10`}>
        <div className='max-w-7xl w-full border border-gray-400 mx-auto rounded-xl'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}