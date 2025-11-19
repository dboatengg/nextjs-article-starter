import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello from Next.js</h1>
      <p>This is your first custom page.</p>

      <p>
        <Link href="/about">Go to About Page</Link>
      </p>
    </main>
  );
}
