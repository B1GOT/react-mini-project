const movies = [
  { title: "Avatar", year: "2009", director: "James Cameron" },
  { title: "Inception", year: "2010", director: "Christopher Nolan" },
  { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
  { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
  { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
  { title: "Parasite", year: "2019", director: "Bong Joon-ho" },
];

function MovieList({ selectedMovie, onSelectMovie, error }) {
  return (
    <div className="mb-4">
      <label className="block font-bold">เลือกหนังที่คุณชอบ *</label>
      <div className={`p-2 rounded-lg ${error ? "border border-red-500" : "border border-gray-300"}`}>
        {movies.map((movie) => (
          <label
            key={movie.title}
            className="flex items-center gap-3 p-4 rounded-lg cursor-pointer hover:bg-gray-100"
          >
            <input
              type="radio"
              name="movie"
              value={movie.title}
              checked={selectedMovie === movie.title}
              onChange={() => onSelectMovie(movie.title)}
              className="w-5 h-5"
            />
            <div>
              <p className="text-lg font-semibold">
                {movie.title} ({movie.year})
              </p>
              <p className="text-sm text-gray-600">Director: {movie.director}</p>
            </div>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}

export default MovieList;
