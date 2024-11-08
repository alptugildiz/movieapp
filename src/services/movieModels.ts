interface IMovies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IResponseMovies {
  Response: string;
  Search: IMovies[];
  totalResults: string;
}
interface IResponseMovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}

interface Rating {
  Source: string;
  Value: string;
}

export type { IMovies, IResponseMovies, IResponseMovieDetails };
