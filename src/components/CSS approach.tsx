import React, { useState, useEffect } from 'react';
import { Coins } from 'lucide-react';

const MetalPrices = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('/api/metal-prices');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPrices(data);
      } catch (error) {
        console.error("Could not fetch metal prices:", error);
        // Fallback data in case the API fails
        setPrices([
          { id: 1, symbol: 'Gold', price: 2000, updated_at: '2024-01-01' },
          { id: 2, symbol: 'Silver', price: 25, updated_at: '2024-01-01' },
        ]);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Coins className="mr-2" /> Metal Prices
      </h1>
      {prices.length > 0 ? (
        <table className="table-auto w-full">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Symbol</th>
              <th className="px-4 py-2">Price (USD)</th>
              <th className="px-4 py-2">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((metal) => (
              <tr key={metal.id}>
                <td className="border px-4 py-2">{metal.symbol}</td>
                <td className="border px-4 py-2">${metal.price}</td>
                <td className="border px-4 py-2">{metal.updated_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading metal prices...</p>
      )}
    </div>
  );
};

export default MetalPrices;