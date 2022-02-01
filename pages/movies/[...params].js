import { useRouter } from 'next/router';

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${router.query.poster_path}`} />
      <h3>{title || 'Loading...'}</h3>
      <h4>{router.query.overview || ''}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
