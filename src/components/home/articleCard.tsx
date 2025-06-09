import styles from "@/styles/card.module.css";
import Tag from "./tag";
import CardTitle from "./cardTitle";
import { Metadata } from "@/pages/articles/[articleId]";


export default function ArticleCard({ metadata }: {metadata: Metadata}) {
  return (
    <div className={styles.card}>
      <div>
        <CardTitle text={metadata.title} />
      </div>
      <div className={styles.tags}>
        {metadata.tags.map((tag) => (
          <Tag text={tag} />
        ))}
      </div>
      <img src={metadata.thumbnail} />
    </div>
  );
}
