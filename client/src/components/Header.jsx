import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/'>
        <a href="/" class="flex items-center mr-3">
          <img
            src="../src/assets/1.png"
            class="mr-2 h-5 sm:h-9"
            alt="Sharvaya Logo"
          />
        </a>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-20 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 items-center">
          <Link to='/'>
          <li className="hidden sm:inline text-slate-700 font-semibold hover:text-violet-900 focus:outline-none">
            Home
          </li>
          </Link>
          <Link to='/about'> 
          <li className="hidden sm:inline text-slate-700 font-semibold hover:text-violet-900 focus:outline-none">
            About
          </li>
          </Link>
          <Link to='/sign-in'>
          <li className="font-medium-400 bg-violet-900 hover:bg-pink-800 focus:outline-none rounded-lg px-2 py-1  text-white">
            Sign In
          </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
