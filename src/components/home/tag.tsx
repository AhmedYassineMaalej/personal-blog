import styles from "@/styles/tag.module.css"

interface params {
  text: string;
}

export default function Tag({ text }: params) {
  return <a className={styles.tag}>#{text}</a>;
}
