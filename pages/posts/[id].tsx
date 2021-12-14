import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/layout';
import { getAllPostsIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilsStyles from '../../styles/utils.module.css';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    id: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilsStyles.headingXl}>{postData.title}</h1>
        <div className={utilsStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
