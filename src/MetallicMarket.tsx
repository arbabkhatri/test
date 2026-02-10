import React, { useState, useEffect } from 'react';
import { Coins } from 'lucide-react';

const MetallicMarket = () => {
  const [metalPrices, setMetalPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('/api/metal-prices');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMetalPrices(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchPrices();

    const intervalId = setInterval(fetchPrices, 60000); // Update every minute

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen"><p>Loading metal prices...</p></div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen"><p>Error: {error}</p></div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex items-center"><Coins className="mr-2" /> Metal Prices</h1>
      {metalPrices.length > 0 ? (
        <table className="table-auto w-full">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Symbol</th>
              <th className="px-4 py-2">Price (USD)</th>
              <th className="px-4 py-2">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {metalPrices.map((metal) => (
              <tr key={metal.id}>
                <td className="border px-4 py-2">{metal.symbol}</td>
                <td className="border px-4 py-2">{metal.price}</td>
                <td className="border px-4 py-2">{metal.updated_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No metal prices available.</p>
      )}
    </div>
  );
};

export default MetallicMarket;