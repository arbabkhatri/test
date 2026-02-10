import React from 'react';
import { Link } from 'react-router-dom';
import { Coins } from 'lucide-react';

function Header() {
  return (
    <header className="bg-gray-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Coins className="mr-2" size={24} />
          Norex
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/metal-prices" className="hover:text-blue-500">
                Metal Prices
              </Link>
            </li>
            <li>
              <Link to="/currency-converter" className="hover:text-blue-500">
                Currency Converter
              </Link>
            </li>
            <li>
              <Link to="/calculator" className="hover:text-blue-500">
                Calculator
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;