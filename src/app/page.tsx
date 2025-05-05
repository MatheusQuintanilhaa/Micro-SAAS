import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-4">
      <div>Hello world!</div>
      <Link href="/login">Fazer Login</Link>
    </main>
  );
}
