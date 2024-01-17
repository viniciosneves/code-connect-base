import Link from "next/link"

import styles from './customlink.module.css'

export const CustomLink = ({ children, ...rest }) => {
    return (<Link {...rest} className={styles.link}>
        {children}
    </Link>)
}