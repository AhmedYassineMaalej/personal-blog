import Articles from "@/components/home/articles";
import fs from "fs";
import { Metadata } from "../articles/[articleId]";
import { ReactElement } from "react";
import Layout from "@/components/common/layout";

export default function Page({ articles }: { articles: Metadata[] }) {
  return (
    <div>
      <Articles articles={articles}/>
    </div>
  );
}

export async function getStaticProps() {
  const dir = fs.readdirSync("src/data/articles");
  const articles: Metadata[] = dir.map(
    (path) => require(`@/data/articles/${path}`).metadata
  );

  articles.sort((article1: Metadata, article2: Metadata) => {
    let date1 = new Date(article1.date);
    let date2 = new Date(article2.date);

    return date2.valueOf() - date1.valueOf();
  });

  return {
    props: { articles: articles },
  };
}


Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
