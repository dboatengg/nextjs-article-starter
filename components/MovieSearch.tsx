"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
};

export default function MovieList({ movies }: { movies: Movie[] }) {
  const [query, setQuery] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full mb-6 p-2 border rounded-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filteredMovies.length === 0 && (
        <p className="text-gray-700">No movies found.</p>
      )}

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <li
            key={movie.id}
            className="bg-white rounded-lg shadow-sm border overflow-hidden"
          >
            <Link href={`/movies/${movie.id}`}>
              <div className="relative w-full h-72">
                <Image
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "/placeholder.png"
                  }
                  alt={movie.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h2 className="font-medium text-lg mb-2">{movie.title}</h2>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {movie.overview}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
