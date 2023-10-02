import './globals.css'

export const metadata = {
  title: 'Book it! Discover great places',
  description: 'Best and cheapest booking page ever',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
