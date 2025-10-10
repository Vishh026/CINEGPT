import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
  // console.log("movielist",movies);
  
  return (
    <div className="flex flex-col gap-2 text-white  ">
      <h1 className="text-xl text-bold">{title}</h1>
      <div className="flex overflow-x-auto overflow-y-hidden">
        {movies.map((movie) => (
       <MovieCart posterPath={movie.poster_path} key={movie.id} />
      ))}
      </div>
    </div>
  );
};
export default MovieList;
