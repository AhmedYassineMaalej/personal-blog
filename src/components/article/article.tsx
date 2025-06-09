import styles from "@/styles/article.module.css";
import ArticleTitle from "./articleTitle";
import ArticleIntro from "./articleIntro";
import ArticleBody from "./articleBody";
import { Data } from "@/pages/articles/[articleId]";
import ArticleHeader from "./articleHeader";

export default function Article({ data }: { data: Data }) {
  const content = data.content;
  const metadata = data.metadata;
  return (
    <div className={styles.article}>
      <ArticleTitle title={metadata.title} />
      <ArticleHeader metadata={metadata} />
      <ArticleIntro content={content.intro} />
      <ArticleBody body={content.body} />
      <ArticleIntro content={content.outro} />
    </div>
  );
}
