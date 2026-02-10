import React, { useState, useEffect } from 'react';
import { Coins } from 'lucide-react';

function MetalPrices() {
    const [prices, setPrices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMetalPrices = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/metal-prices');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPrices(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMetalPrices();

        const intervalId = setInterval(fetchMetalPrices, 60000);

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
                <Coins className="mr-2" size={32} /> Metal Prices
            </h1>
            {prices.length > 0 ? (
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Symbol</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prices.map((metal) => (
                            <tr key={metal.symbol} className="border-b">
                                <td className="border px-4 py-2">{metal.symbol}</td>
                                <td className="border px-4 py-2">{metal.price}</td>
                                <td className="border px-4 py-2">{metal.updated_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>No metal prices available.</div>
            )}
        </div>
    );
}

export default MetalPrices;