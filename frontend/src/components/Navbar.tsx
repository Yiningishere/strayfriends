import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Menu } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <PawPrint className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Stray Friends</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/dogs" className="text-gray-700 hover:text-blue-600">Dogs</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/report-sighting" className="text-gray-700 hover:text-blue-600">Report Sighting</Link>
            <Link to="/volunteer" className="text-gray-700 hover:text-blue-600">Volunteer</Link>
            <Link to="/donate" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
              role="button"
            >
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden w-full bg-white shadow-lg rounded-md">
            <div className="px-4 py-2 space-y-1">
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/dogs"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Dogs
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/report-sighting"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Report Sighting
              </Link>
              <Link
                to="/volunteer"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Volunteer
              </Link>
              <Link
                to="/donate"
                className="block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
