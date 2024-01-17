import styles from './aside.module.css'
import Image from 'next/image'

import logo from './logo.png'

export const Aside = () => {
    return (<aside className={styles.aside}>
        <Image src={logo} alt="" />
        {/* <img src="/logo.png" alt="" /> */}
    </aside>)
}