import styles from "@/styles/articlebody.module.css";
import { useState } from "react";
import { useEffect } from "react";

import hljs from "highlight.js/lib/core";
import "highlight.js/styles/github-dark-dimmed.css";
import rust from "highlight.js/lib/languages/rust";
hljs.registerLanguage("rust", rust);

interface codeSnippetParams {
  code: string;
  language: string;
  file: string | undefined;
  copiable: boolean | undefined;
}

export default function CodeSnippet({
  code,
  language,
  file,
  copiable,
}: codeSnippetParams) {
  var footer = <></>;
  if (file !== undefined) {
    footer = (
      <>
        <hr />
        <CodeSnippetFooter text={file} />
      </>
    );
  }

  var copyButton = <></>;
  if (copiable) {
    copyButton = <CopyButton code={code}/>
  }

  return (
    <div className={styles.codeSnippetContainer}>
      {copyButton}
      <CodeBlock code={code} language={language} />
      {footer}
    </div>
  );
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  useEffect(() => {
    const nodes: any = document.querySelectorAll("pre code");
    nodes.forEach((node: any) => hljs.highlightElement(node));
  }, []);

  return (
    <div className={styles.codeBlockContainer}>
      <pre>
        <code className={`${styles.codeBlock} language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}

function CodeSnippetFooter({ text }: { text: string }) {
  return (
    <div className={styles.codeSnippetFooter}>
      <p>article.md</p>
    </div>
  );
}

function CopyButton({ code }: { code: string }) {
  const [buttonText, setButtonText] = useState("copy");
  const [clickedClass, setClickedClass] = useState("");

  const onClick = () => {
    navigator.clipboard.writeText(code);
    setButtonText("copied!");
    setClickedClass(styles.clicked);
    setTimeout(() => {
      setButtonText("copy");
      setClickedClass("");
    }, 1000);
  };

  return (
    <button
      onClick={onClick}
      className={`${styles.copyButton} ${clickedClass}`}
    >
      {buttonText}
    </button>
  );
}
