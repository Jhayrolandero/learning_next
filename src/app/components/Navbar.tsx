import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" bg-white text-black flex justify-between">  
    <h1>Heil</h1>
    <Link href="about">About</Link>
    <Link href="/">Home</Link>
  </nav>    
  )
}
