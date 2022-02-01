import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Seo() {
  const router = useRouter();
  const pathNames = { '/': 'Home', '/about': 'About' };

  return (
    <Head>
      <title>{pathNames[router.pathname]} | Next Movies</title>
    </Head>
  );
}
