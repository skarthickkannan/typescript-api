import Layout from '../components/Layout';
import Link from 'next/link';
import { InferGetStaticPropsType } from 'next';
import style from '../styles/Home.module.css';

interface Iposts {
  id: number;
  title: string;
  body: string;
}

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      {posts.map((p) => (
        <div key={p.id} className={style.card}>
          <Link href={`/posts/${p.id}`}>
            <a>
              <h1 className={style.title}>{p.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const posts: Iposts[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};
