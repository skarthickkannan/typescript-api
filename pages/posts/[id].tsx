import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import style from '../../styles/SinglePost.module.css';
import Layout from '../../components/Layout';

interface Iposts {
  id: number;
  title: string;
  body: string;
}

const SinglePost = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  return (
    <Layout>
      <div key={posts.id} className={style.card}>
        <h1 className={style.title}>{posts.title}</h1>
        <p className={style.body}>{posts.body}</p>
        <Link href={`/`}>
          <a>
            <button className={style.buttonBack}>Back to home</button>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.query.id}`
  );

  const posts: Iposts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default SinglePost;
