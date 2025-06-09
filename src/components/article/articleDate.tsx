import styles from "@/styles/articleHeader.module.css"

export default function ArticleDate({ date }: { date: string }) {
  return <div className={styles.dateContainer}>
      <p className={styles.date}>{date}</p>
  </div>;
}
