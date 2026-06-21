import './globals.css'
import Navbar from './layout/nav'
import Footer from './layout/footer'

export const metadata = {
  title: 'SSA Hunter Valley'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}