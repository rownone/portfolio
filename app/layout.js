import './index.css'
import './globals.css'
import './custom.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ronan Lee',
  description: 'Ronan Lee',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" /> 
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
