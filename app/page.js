import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <Link 
      href="./week-2"
      className="text-cyan-600 underline hover:text-cyan-300">Week 2</Link>
    </main>
  );
}
