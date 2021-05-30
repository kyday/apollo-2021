export type IMovie = {
  id: number;
  name: string;
  title: string;
  rating: number;
  medium_cover_image: string;
  description_intro: string;
};

export type IMovieData = {
  movie: IMovie;
  suggestions: IMovie[];
};

export type IMoviesData = {
  movies: IMovie[];
};

export type IMovieVars = {
  id: number;
};
