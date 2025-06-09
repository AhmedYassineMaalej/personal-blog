import styles from "@/styles/articleHeader.module.css";

export default function ArticleReadtime({ readtime }: { readtime: string }) {
  return <p className={styles.readtime}>{readtime}</p>;
}
