import Link from "next/link";


export default function StudentInfo(){
    return(
        <div>
            <h1>Jared Gutierrez</h1>
            <Link 
            href="https://github.com/Jaredg01/cprg306-assignments"
            className="text-cyan-600 underline hover:text-cyan-300">My GitHub Repository</Link>
        </div>
    )
}