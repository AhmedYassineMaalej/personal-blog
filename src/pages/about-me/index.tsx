import Intro from "@/components/about-me/intro";
import Skills from "@/components/about-me/skills";
import Timeline from "@/components/about-me/timeline";
import Layout from "@/components/common/layout";

import styles from "@/styles/about.module.css";
import { ReactElement } from "react";

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
    <div className={styles.about}>
      <Intro
        image={data.intro.image}
        greeting={data.intro.greeting}
        bio={data.intro.bio}
      />
      <Skills data={data.skills} />
      <Timeline data={data.timeline} />
    </div>
  );
}

export async function getStaticProps() {
  const data: Data = require("@/data/about-me.json");

  return { props: { data } };
}

AboutMe.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
