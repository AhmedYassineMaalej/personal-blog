import styles from "@/styles/articlebody.module.css";
import CodeSnippet from "./codeBlock";
import { Section } from "@/pages/articles/[articleId]";
import ArticleParagraph from "./articleParagraph";

export default function ArticleBody({ body }: { body: Section[] }) {
  return <div className={styles.body}>{body.map(processSection)}</div>;
}

function processSection(section: Section) {
  if (section.type == "Paragraph") {
    return <ArticleParagraph entries={section.entries}/>;
  }
  if (section.type == "Codeblock") {
    return <CodeSnippet code={section.code} language={section.language} file={section.file} copiable={section.copiable} />;
  }

  if (section.type == "Title") {
    return <p className={styles.title}>{section.text}</p>;
  }

  if (section.type == "Image") {
    return <img src={section.path} />;
  }
}
