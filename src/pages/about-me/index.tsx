import Intro from "@/components/about-me/intro";
import Navbar from "@/components/common/navbar";
import Skills from "@/components/about-me/skills";
import Footer from "@/components/common/footer";
import Timeline from "@/components/about-me/timeline";

import styles from "@/styles/about.module.css";

type Data = {
  intro: IntroData;
  skills: SkillData[];
  timeline: TimelineData;
};

type IntroData = {
  greeting: string;
  bio: string;
  image: string;
};

export type SkillData = {
  image: string;
  description: string;
};

export type TimelineData = {
  events: EventData[];
};

export type EventData = {
  date: string;
  title: string;
  description: string;
};

interface params {
  data: Data;
}

export default function AboutMe({ data }: params) {
  return (
    <div>
      <Navbar />
      <div className={styles.about}>
        <Intro
          image={data.intro.image}
          greeting={data.intro.greeting}
          bio={data.intro.bio}
        />
        <Skills data={data.skills} />
        <Timeline data={data.timeline} />
      </div>
      <Footer />
    </div>
  );
}

// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const data: Data = require("@/data/about-me.json");

  return { props: { data } };
}
