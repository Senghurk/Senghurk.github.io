import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full p-5 z-50">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-cyan-400 text-xl font-mono">
                    HengHurk._
                </Link>
                <div className="space-x-8 font-mono text-gray-400">
                    <Link to="/" className="hover:text-white">// home</Link>
                    <Link to="/expertise" className="hover:text-white">// expertise</Link>
                    <Link to="/work" className="hover:text-white">// work</Link>
                    <Link to="/experience" className="hover:text-white">// experience</Link>
                    <Link to="/contact" className="hover:text-white">// contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar