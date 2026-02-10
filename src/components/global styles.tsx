import React from 'react';

const GlobalStyles = () => {
  return (
    <style jsx global>{`
      /* Global Styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f7fafc; /* Tailwind's bg-gray-100 */
        color: #2d3748; /* Tailwind's text-gray-700 */
      }

      .app-container {
        padding: 2rem;
        max-width: 1200px;
        margin: auto;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start; /* Align items to the top */
      }

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #1a202c; /* Tailwind's text-gray-900 */
      }

      p {
        font-size: 1.125rem;
        margin-bottom: 1.5rem;
        color: #4a5568; /* Tailwind's text-gray-600 */
      }

      button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        background-color: #4299e1; /* Tailwind's bg-blue-500 */
        color: white;
        border: none;
        border-radius: 0.375rem;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      button:hover {
        background-color: #2b6cb0; /* Tailwind's bg-blue-700 */
      }

      button:active {
        background-color: #2c5282; /* Tailwind's bg-gray-800 */
      }

      /* Add more global styles here as needed */
    `}</style>
  );
};

export default GlobalStyles;