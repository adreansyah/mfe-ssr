import styles from './Card.module.css'
import Image from 'next/image'
import { useState } from 'react'
import cls from 'classnames'
const Card = ({
    imgUrl,
    size = "medium",
    id
}) => {
    const [imgSrc, setImgSrc] = useState(imgUrl)
    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
    }
    const handleOnError = () => {
        setImgSrc("https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80")
    }


    return (
        <div className={styles.container}>
            <Image
                src={imgSrc}
                alt="image"
                width="150"
                height="300"
                //onError={handleOnError}
                className={styles.cardImg}
            />
        </div>
    )
}

export default Card