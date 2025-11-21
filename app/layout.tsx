// app/layout.tsx
import { Providers } from "./providers";
import type { Metadata } from 'next'
import './globals.css'
import { Bevan } from 'next/font/google'
import NavigationBar from "./components/navigation/NavigationBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: 'Cyrus Layugan',
  description: 'COOKIE',
}

const bevan = Bevan({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bevan.className}>
      <body className="relative">
        <Providers>
          <NavigationBar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
