export type IMovie = {
  id: number;
  name: string;
  title: string;
  rating: number;
  medium_cover_image: string;
};

export type IMovieData = {
  movie: IMovie;
};

export type IMovieVars = {
  id: number;
};

export type IMoviesData = {
  movies: IMovie[];
};
