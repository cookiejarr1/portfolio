// app/layout.tsx
import { Providers } from "./providers";
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cyrus Layugan',
  description: 'COOKIE',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
