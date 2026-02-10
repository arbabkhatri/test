// src/api/market-data.ts
// This file simulates fetching metal prices from an external API.
// In a real application, you would replace this with actual API calls.

const metalPrices = [
  { symbol: "XAU", name: "Gold", price: 2350.50, unit: "USD/oz" },
  { symbol: "XAG", name: "Silver", price: 32.20, unit: "USD/oz" },
  { symbol: "XPT", name: "Platinum", price: 1050.00, unit: "USD/oz" },
  { symbol: "XPD", name: "Palladium", price: 980.75, unit: "USD/oz" },
  { symbol: "XCU", name: "Copper", price: 4.50, unit: "USD/lb" },
];

/**
 * Fetches the latest metal prices.
 * @returns {Promise<Array<{ symbol: string; name: string; price: number; unit: string; }>>}
 */
export async function getMetalPrices() {
  // Simulate an API call with a 1-second delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return metalPrices;
}

export default async function handler(req, res) {
  try {
    const prices = await getMetalPrices();
    res.status(200).json(prices);
  } catch (error) {
    console.error("Error fetching metal prices:", error);
    res.status(500).json({ error: "Failed to retrieve metal prices" });
  }
}