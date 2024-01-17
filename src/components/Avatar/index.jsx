import Image from "next/image"

import styles from './avatar.module.css'

export const Avatar = ({ imageSrc, name }) => {
    return (<ul className={styles.avatar}>
        <li>
            <Image src={imageSrc} width={32} height={32} alt={name}/>
        </li>
        <li>
            @{name}
        </li>
    </ul>)
}