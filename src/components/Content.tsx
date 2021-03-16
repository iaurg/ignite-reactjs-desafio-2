import { MovieCard } from './MovieCard';

type Movie = {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Value: string;
  }>;
  Runtime: string;
}

type ContentProps = {
  selectedGenreTitle: string
  movies: Movie[]
}

export function Content({movies, selectedGenreTitle} :ContentProps) {
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie:Movie) => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}