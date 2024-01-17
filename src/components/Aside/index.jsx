import styles from './aside.module.css'
import Image from 'next/image'

import logo from './logo.png'
import Link from 'next/link'

export const Aside = () => {
    return (<aside className={styles.aside}>
        <Link href="/">
            <Image src={logo} alt="" />
        </Link>
        {/* <img src="/logo.png" alt="" /> */}
    </aside>)
}