import './globals.css'
import { Roboto } from 'next/font/google'
import Navbar from '../components/Navbar'

const roboto = Roboto({ 
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ['latin'] 
})
export const metadata = {
  title: "My Page",
  description: "My Description"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
