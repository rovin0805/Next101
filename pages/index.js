import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter();

  const onClickMovie = (id, movie) => {
    router.push(
      {
        pathname: `/movies/${movie.original_title}/${id}`,
        query: movie,
      },
      `/movies/${movie.original_title}/${id}`,
    );
  };

  return (
    <div className='container'>
      {results?.map(movie => (
        <div
          key={movie.id}
          className='movie'
          onClick={() => onClickMovie(movie.id, movie)}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link
              href={{
                pathname: `/movies/${movie.original_title}/${movie.id}`,
                query: {
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// function's name must be "getServerSideProps" with export
// only running in server side
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: { results },
  };
}
