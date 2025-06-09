import styles from "@/styles/cardtitle.module.css"

interface params {
    text: string,
}

export default function CardTitle({ text }: params) {

    return (
        <a className={styles.title} href="/articles/1">{text}</a>
    )
}
