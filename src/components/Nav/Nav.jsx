import { Link } from "react-router-dom"
export default function Nav() {
  return (
    <header className="bg-green-950 text-white p-6">
        <nav className="flex justify-between">
            <h1 className="text-4xl hover:text-green-400">Store Elétric</h1>
            <Link to="/" className="text-2xl hover:text-[#00FFFF]">Home</Link>
        </nav>

    </header>
  )
}
