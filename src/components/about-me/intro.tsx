import styles from "@/styles/intro.module.css";

interface params {
  image: string;
  greeting: string;
  bio: string;
}

export default function Intro({ image, greeting, bio }: params) {
  return (
    <div className={styles.intro}>
      <img src={image} />
        <p className={styles.greeting}>{greeting}</p>
        <p className={styles.bio}>{bio}</p>
    </div>
  );
}
