"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div style={{ padding: "1rem", color: "red" }}>
      <h2>Something went wrong.</h2>
      <p>{error.message}</p>

      <button onClick={reset} style={{ marginTop: "1rem" }}>
        Try again
      </button>
    </div>
  );
}
