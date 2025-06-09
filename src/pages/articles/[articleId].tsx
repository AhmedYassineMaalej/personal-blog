import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import Article from "@/components/article/article";
import { useRouter } from "next/router";

export type Data = {
  metadata: Metadata;
  content: Content;
};

export type Metadata = {
  title: string;
  tags: string[];
  thumbnail: string;
  date: string;
  readtime: string;
};

export type Content = {
  intro: ParagraphEntry[];
  body: Section[];
  outro: ParagraphEntry[];
};

export type Section = Paragraph | Codeblock | Title | Image;

export type Paragraph = {
  type: "Paragraph";
  entries: ParagraphEntry[];
};

export type ParagraphEntry = Code | Normal | Url;

export type Code = {
  type: "Code";
  code: string;
};

export type Normal = {
  type: "Normal";
  text: string;
};

export type Url = {
  type: "Url";
  display: string;
  url: string;
};

export type Codeblock = {
  type: "Codeblock";
  language: string;
  code: string;
  file?: string | undefined;
  copiable?: boolean | undefined;
};

export type Title = {
  type: "Title";
  level: number;
  text: string;
};

export type Image = {
  type: "Image";
  path: string;
};

export interface articleProps {
  data: Data;
}

export default function Home({ data }: articleProps) {
  return (
    <div>
      <Navbar />
      <Article data={data} />
      <Footer />
    </div>
  );
}

// This function runs only on the server side
export function getStaticProps({ params }: any) {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`

  const data = require(`@/data/articles/article_${params.articleId}.json`);
  return { props: { data } };
}

export async function getStaticPaths() {
  const paths = [{ params: { articleId: "1" } }];

  return {
    paths,
    fallback: false,
  };
}
