import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-4 text-center">
      <p className="text-gray-500">
        &copy; {new Date().getFullYear()} Norex. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;