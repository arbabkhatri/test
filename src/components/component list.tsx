import React, { useState, useEffect } from 'react';
import { Coins } from 'lucide-react';

interface MetalPrice {
  id: number;
  symbol: string;
  price: number;
  updated_at: string;
}

const MetalPrices = () => {
  const [metalPrices, setMetalPrices] = useState<MetalPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      } catch (e: any) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchPrices();

    const intervalId = setInterval(fetchPrices, 60000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <div>Loading metal prices...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Coins className="mr-2" />
        Metal Market Prices
      </h1>
      {metalPrices.length > 0 ? (
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Symbol</th>
              <th className="py-2 px-4 border-b">Price (USD)</th>
              <th className="py-2 px-4 border-b">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {metalPrices.map((metal) => (
              <tr key={metal.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b text-center">{metal.symbol}</td>
                <td className="py-2 px-4 border-b text-center">{metal.price}</td>
                <td className="py-2 px-4 border-b text-center">{new Date(metal.updated_at).toLocaleString()}</td>
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

export default MetalPrices;