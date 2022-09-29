import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-zinc-800 text-white flex flex-1 items-center justify-between py-1 px-2 mb-2">
            <div className="flex space-x-2">
                <Image src="/images/pokeball.png" width="30" height="30" alt="PokeNext" />
                <h1 className="font-bold text-lg">PokeNext</h1>
            </div>
            <div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/"><a className="hover:bg-zinc-700 rounded-lg px-3 py-2 duration-300">Home</a></Link>
                    </li>
                    <li>
                        <Link href="/About"><a className="hover:bg-zinc-700 rounded-lg px-3 py-2 duration-300">About</a></Link>
                    </li>
                    <li>
                        <Link href="/about"><a className="hover:bg-zinc-700 rounded-lg px-3 py-2 duration-300">Api</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;