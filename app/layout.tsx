import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarCanvas from '@/ui/main/starBackground/StarBackground'
import Navbar from '@/ui/main/navbar/Navbar'
import Footer from '@/ui/main/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Global Future Edution Summit',
  description: 'Global future education summit bangalore 2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarCanvas />/
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
