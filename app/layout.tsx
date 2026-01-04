import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'landing page',
  description: 'a modern, minimalist landing page with a hero section, features section, contact form, and footer. built with next.js, typescript, and tailwind css following best practices for seo and analytics.',
  keywords: ['web', 'app'],
  authors: [{ name: 'DUDE X Builder' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
