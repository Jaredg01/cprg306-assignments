import Link from "next/link";


export default function Home() {

  let linkStyles = "text-cyan-600 underline hover:text-cyan-300"

  return (
    <main>
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link 
          href="./week-2"
          className={linkStyles}>Week 2</Link>
        </li>
        <li>
          <Link 
          href="./week-3"
          className={linkStyles}>Week 3</Link>
        </li>
        <li>
          <Link 
          href="./week-4"
          className={linkStyles}>Week 4</Link>
        </li>
        <li>
          <Link 
          href="./week-5"
          className={linkStyles}>Week 5</Link>
        </li>
      </ul>
    </main>
  );
}
