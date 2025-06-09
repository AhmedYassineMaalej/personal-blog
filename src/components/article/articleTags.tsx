import styles from "@/styles/articletags.module.css";

interface props {
  tags: string[];
}

export default function ArticleTags({ tags }: props) {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <p className={styles.tag}>#{tag}</p>
      ))}
    </div>
  );
}
