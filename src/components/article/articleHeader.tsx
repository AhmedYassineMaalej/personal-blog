import { Metadata } from "@/pages/articles/[articleId]";
import ArticleDate from "./articleDate";
import ArticleReadtime from "./articleReadtime";
import ArticleTags from "./articleTags";

import styles from "@/styles/articleHeader.module.css"


export default function ArticleHeader({ metadata }: { metadata: Metadata }) {
  return (
    <div className={styles.articleHeader}>
      <ArticleTags tags={metadata.tags}/>
      <ArticleReadtime readtime={metadata.readtime}/>
      <ArticleDate date={metadata.date}/>
    </div>
  );
}
