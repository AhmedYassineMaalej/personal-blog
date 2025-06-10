import { Metadata } from "@/pages/articles/[articleId]";
import ArticleCard from "./articleCard";
import styles from "@/styles/articleview.module.css";

export default function Articles({ articles }: { articles: Metadata[] }) {
  return (
    <div className={styles.articleView}>
      {articles.map((metadata) => <ArticleCard metadata={metadata}/>)}
    </div>
  );
}
