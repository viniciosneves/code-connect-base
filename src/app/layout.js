import { Prompt } from 'next/font/google'

import { Aside } from '@/components/Aside'
import './globals.css'

import styles from './layout.module.css'

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})
 

export const metadata = {
  title: 'Code Connect',
  description: 'Uma rede social pra quem ama código!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className={styles.container}>
          <Aside />
          {children}
        </div>
      </body>
    </html>
  )
}
