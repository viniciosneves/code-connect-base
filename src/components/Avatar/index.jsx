import Image from "next/image"

export const Avatar = ({ imageSrc, name }) => {
    return (<ul>
        <li>
            <Image src={imageSrc} width={32} height={32}/>
        </li>
        <li>
            {name}
        </li>
    </ul>)
}