import { Movie } from '@/interfaces/models';
import MovieCard from '@/components/MovieCard';

const TEMP_FAVORITES: Movie[] = [
  {
    title: 'The Godfather',
    id: '1',
  },
  {
    title: 'The Shawshank Redemption',
    id: '2',
  },
  {
    title: "Schindler's List",
    id: '3',
  },
  {
    title: 'Raging Bull',
    id: '4',
  },
  {
    title: 'Casablanca',
    id: '5',
  },
];

const TEMP_NEW_RELEASES: Movie[] = [
  {
    title: 'Oppenheimer',
    id: '6',
  },
  {
    title: 'Barbie',
    id: '7',
  },
  {
    title: 'The Matrix',
    id: '8',
  },
  {
    title: 'The Matrix Reloaded',
    id: '9',
  },
  {
    title: 'The Matrix Revolutions',
    id: '10',
  },
];

export default async function QueueIndex(): Promise<JSX.Element> {
  const new_releases: Movie[] = await new Promise((resolve) => setTimeout(() => resolve(TEMP_NEW_RELEASES), 1000));
  return (
    <div className="p-2">
      <h1 className="text-xl">Old Favorites</h1>
      <div className="">
        {TEMP_FAVORITES.map((movie) => (
          <div className="float-left p-2 pt-0" key={movie.id}>
            <MovieCard movie={movie} rating={5} />
          </div>
        ))}
      </div>
      <div className="inline-block">
      <h1 className="text-xl">New Releases</h1>
        {new_releases.map((movie) => (
          <div className="float-left p-2 pt-0" key={movie.id}>
            <MovieCard movie={movie} rating={5} />
          </div>
        ))}
      </div>
    </div>
  );
}
