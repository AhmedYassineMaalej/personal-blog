import styles from "@/styles/articletitle.module.css";

interface props {
  title: string;
}

export default function ArticleTitle({ title }: props) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {title}
      </p>
    </div>
  );
}
