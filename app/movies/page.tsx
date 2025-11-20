// import Image from "next/image";
// import Link from "next/link";

// type Movie = {
//   id: number;
//   title: string;
//   overview: string;
//   poster_path: string | null;
// };

// export default async function MoviesPage() {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch movies");
//   }

//   const data = await res.json();
//   const movies: Movie[] = data.results;

//   return (
//     <div>
//       <h1 className="text-2xl font-semibold mb-6">Popular Movies</h1>

//       <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {movies.map((movie) => (
//           <li
//             key={movie.id}
//             className="bg-white rounded-lg shadow-sm border overflow-hidden"
//           >
//             <Link href={`/movies/${movie.id}`} >
//             <div className="relative w-full h-72">
//               <Image
//                 src={
//                   movie.poster_path
//                     ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//                     : "/placeholder.png"
//                 }
//                 alt={movie.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             <div className="p-4">
//               <h2 className="font-medium text-lg mb-2">{movie.title}</h2>
//               <p className="text-gray-700 text-sm line-clamp-3">
//                 {movie.overview}
//               </p>
//             </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import MoviesSearch from "@/components/MovieSearch";

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
};

export default async function MoviesPage() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();
  const movies: Movie[] = data.results;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Popular Movies</h1>
      <MoviesSearch movies={movies} />
    </div>
  );
}
