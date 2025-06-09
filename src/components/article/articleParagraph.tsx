import { ParagraphEntry } from "@/pages/articles/[articleId]";
import styles from "@/styles/articlebody.module.css";

export default function ArticleParagraph({
  entries,
}: {
  entries: ParagraphEntry[];
}) {
  return (
    <p className={styles.paragraph}>
      {entries.map((entry) => process_paragraph_entry(entry))}
    </p>
  );
}

export function process_paragraph_entry(entry: ParagraphEntry) {
  if (entry.type == "Code") {
    return <code className={styles.inlineCode}>{entry.code}</code>;
  }

  if (entry.type == "Normal") {
    return entry.text;
  }

  if (entry.type == "Url") {
    return <a href={entry.url} className={styles.link}>{entry.display}</a>;
  }
}
