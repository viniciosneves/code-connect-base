import { Aside } from '@/components/Aside'
import './globals.css'

import styles from './layout.module.css'

export const metadata = {
  title: 'Code Connect',
  description: 'Uma rede social pra quem ama código!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className={styles.container}>
          <Aside />
          {children}
        </div>
      </body>
    </html>
  )
}
