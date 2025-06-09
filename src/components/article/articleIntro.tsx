import { ParagraphEntry } from "@/pages/articles/[articleId]";
import styles from "@/styles/articleintro.module.css";
import { process_paragraph_entry } from "./articleParagraph";

export default function ArticleIntro({ content }: { content: ParagraphEntry[] }) {
  return <p className={styles.intro}>{content.map(process_paragraph_entry)}</p>;
}
