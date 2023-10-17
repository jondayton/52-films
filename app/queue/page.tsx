import { Movie } from "@/interfaces/models"
import MovieCard from "@/components/MovieCard"

const TEMP_FAVORITES: Movie[] = [
  { 
    title: 'The Godfather',
    id: '1',
  },{ 
    title: 'The Shawshank Redemption',
    id: '2',
  },{ 
    title: 'Schindler\'s List',
    id: '3',
  },{ 
    title: 'Raging Bull',
    id: '4',
  },{ 
    title: 'Casablanca',
    id: '5',
},]

const TEMP_NEW_RELEASES: Movie[] = [
  { 
    title: 'Oppenheimer',
    id: '6',
  },{ 
    title: 'Barbie',
    id: '7',
  },{ 
    title: 'The Matrix',
    id: '8',
  },{ 
    title: 'The Matrix Reloaded',
    id: '9',
  },{ 
    title: 'The Matrix Revolutions',
    id: '10',
  },  
]

export default async function QueueIndex (): Promise<JSX.Element> {
  const new_releases: Movie[] = await new Promise((resolve) => setTimeout(() => resolve(TEMP_NEW_RELEASES), 1000))
  return (
    <>
      <h1>Old Favorites</h1>
      {TEMP_FAVORITES.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
      <h1>New Releases</h1>
      {new_releases.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </>
  )
}
