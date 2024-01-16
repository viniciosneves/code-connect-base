import './globals.css'


export const metadata = {
  title: 'Code Connect',
  description: 'Uma rede social pra quem ama código!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
