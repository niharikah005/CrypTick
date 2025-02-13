import React from 'react';
import { Link } from "react-router-dom";
import { ArrowUp, ArrowDown, TrendingUp } from 'lucide-react';
import { LineChart, Line, YAxis } from 'recharts';

const CoinRanking = (props) => {
  if (!props.crypticCoin) return null;

  const firstFourCoins = [
    { name: "uni", address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984" },
    { name: "link", address: "0x779877A7B0D9E8603169DdbD7836e478b4624789" },
    { name: "usdt", address: "0x7169D38820dfd117C3FA1f22a697dBA58d90BA06" },
    { name: "usdc", address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238" },
  ];

  const selectedCoins = firstFourCoins
    .map((fc) => props.crypticCoin.find((c) => c.symbol.toLowerCase() === fc.name.toLowerCase()))
    .filter(Boolean);

  const remainingCoins = props.crypticCoin.filter(
    (c) => !selectedCoins.some((sc) => sc.symbol.toLowerCase() === c.symbol.toLowerCase())
  );

  const randomFive = remainingCoins.sort(() => 0.5 - Math.random());
  const finalCoins = [...selectedCoins, ...randomFive];

  const formatNumber = (num, decimals = 2) => {
    if (num >= 1e9) return (num / 1e9).toFixed(decimals) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(decimals) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(decimals) + 'K';
    return num.toFixed(decimals);
  };

  // Generate mock sparkline data for each coin
  const generateSparklineData = (basePrice) => {
    return Array.from({ length: 7 }, (_, i) => ({
      date: i,
      price: basePrice * (1 + (Math.random() * 0.4 - 0.2))
    }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">#</th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">Coin</th>
                <th className="px-4 py-4 text-right text-sm font-semibold text-gray-600">Price</th>
                <th className="px-4 py-4 text-right text-sm font-semibold text-gray-600">1h</th>
                <th className="px-4 py-4 text-right text-sm font-semibold text-gray-600">24h</th>
                <th className="px-4 py-4 text-right text-sm font-semibold text-gray-600">7d</th>
                <th className="px-4 py-4 text-right text-sm font-semibold text-gray-600">24h Volume</th>
                <th className="px-4 py-4 text-right text-sm font-semibold text-gray-600">Market Cap</th>
                <th className="px-4 py-4 text-right text-sm font-semibold text-gray-600">Last 7 Days</th>
              </tr>
            </thead>
            <tbody>
              {finalCoins.map((coin, index) => {
                const hourChange = (Math.random() * 4 - 2).toFixed(2);
                const dayChange = (Math.random() * 10 - 5).toFixed(2);
                const weekChange = (Math.random() * 20 - 10).toFixed(2);
                const volume = Math.random() * 1000000000;
                const marketCap = coin.current_price * 1000000000;
                const sparklineData = generateSparklineData(coin.current_price);
                const isPositiveWeek = parseFloat(weekChange) >= 0;
                
                return (
                  <tr 
                    key={coin.id} 
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-4 py-4 text-sm text-gray-500">{index + 1}</td>
                    <td className="px-4 py-4">
                      <Link 
                        to={`/coin/${coin.symbol}`}
                        className="flex items-center gap-3 group"
                      >
                        <img 
                          src={coin.image} 
                          alt={coin.name} 
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">
                            {coin.name}
                          </span>
                          <span className="text-xs text-gray-500 uppercase">
                            {coin.symbol}
                          </span>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="text-sm font-medium text-gray-900">
                        ${coin.current_price.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <ChangeCell value={hourChange} />
                    </td>
                    <td className="px-4 py-4 text-right">
                      <ChangeCell value={dayChange} />
                    </td>
                    <td className="px-4 py-4 text-right">
                      <ChangeCell value={weekChange} />
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <TrendingUp className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900">
                          ${formatNumber(volume)}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="text-sm text-gray-900">
                        ${formatNumber(marketCap)}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="w-28 h-12 inline-block">
                        <LineChart width={112} height={48} data={sparklineData}>
                          <YAxis domain={['dataMin', 'dataMax']} hide={true} />
                          <Line 
                            type="monotone" 
                            dataKey="price" 
                            stroke={isPositiveWeek ? "#22c55e" : "#ef4444"} 
                            strokeWidth={1.5} 
                            dot={false}
                          />
                        </LineChart>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Helper component for price changes
const ChangeCell = ({ value }) => {
  const isPositive = parseFloat(value) >= 0;
  return (
    <div className="flex items-center justify-end gap-1">
      {isPositive ? (
        <ArrowUp className="w-4 h-4 text-green-500" />
      ) : (
        <ArrowDown className="w-4 h-4 text-red-500" />
      )}
      <span className={`text-sm font-medium ${
        isPositive ? 'text-green-500' : 'text-red-500'
      }`}>
        {isPositive ? '+' : ''}{value}%
      </span>
    </div>
  );
};

export default CoinRanking;