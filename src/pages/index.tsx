import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import PostList from "../components/PostList";
import { SocialList } from "../components/SocialList";
import config from "../lib/config";
import { countPosts, listPostContent } from "../lib/posts";
import { listTags } from "../lib/tags";

export default function Index(props) {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div className="hero">
          <h1>
            Moody Foodie<span className="fancy">.</span>
          </h1>
          <span className="handle">@moodyfoodie</span>
          <SocialList />
        </div>

        <PostList {...props} />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: start;
          flex-direction: column;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          margin-bottom: 0.5em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }
        .hero {
          margin-bottom: 2rem;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };

  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};