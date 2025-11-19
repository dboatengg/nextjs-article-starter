import Link from "next/link";

export default function About() {
  return (
    <main>
      <h1>About This App</h1>
      <p>This page lives at /about.</p>

      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </main>
  );
}
