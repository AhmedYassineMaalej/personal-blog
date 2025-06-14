import styles from "@/styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <p className={styles.footerEntry}>Contacts:</p>
        <p className={styles.footerEntry}>ahmedyessinemaalej@gmail.com</p>
        <FooterEntry
          text={"Github"}
          link={"https://github.com/AhmedYassineMaalej"}
          image={"github.png"}
          invert={true}
        />
        <FooterEntry
          text={"Linkedin"}
          link={"https://www.linkedin.com/in/ahmedyassinemaalej/"}
          image={"linkedin.png"}
          invert={false}
        />
      </div>
    </div>
  );
}

interface footerEntryProps {
  text: string;
  link: string;
  image: string;
  invert: boolean;
}

function FooterEntry({ text, link, image, invert }: footerEntryProps) {
  const invertClass = invert ? styles.invert : "";

  return (
    <div className={styles.footerEntryContainer}>
      <a href={link} target="_blank" className={styles.footerEntry}>
        <p>{text}</p>{" "}
        <img src={image} className={`${styles.footerImage} ${invertClass}`} />
      </a>
    </div>
  );
}
