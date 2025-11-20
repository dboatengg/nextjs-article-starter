// import Link from "next/link";

// export default function Home() {
//   return (
//     <main>
//       <h1>Hello from Next.js</h1>
//       <p>This is your first custom page.</p>

//       <p>
//         <Link href="/about">Go to About Page</Link>
//       </p>
//     </main>
//   );
// }

/*====================UPDATE 1=============================*/
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-center min-h-[80vh] space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Welcome to the Movie Browsing App</h1>

      <p className="mb-4">
        Explore popular movies, search your favorites, and view detailed
        information.
      </p>

      <p className="space-x-4">
        <Link href="/movies" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Browse Movies
        </Link>

        <Link href="/about" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          About This Project
        </Link>
      </p>
    </main>
  );
}
