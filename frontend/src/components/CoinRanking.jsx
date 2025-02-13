import { Link } from "react-router-dom";

const CoinRanking = (props) => {
  console.log(props.crypticCoin);
  console.log("Inside ranking");

  const firstFourCoins = [
    { name: "uni", address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984" }, 
    { name: "link", address: "0x779877A7B0D9E8603169DdbD7836e478b4624789" },
    { name: "usdt", address: "0x7169D38820dfd117C3FA1f22a697dBA58d90BA06" },
    { name: "usdc", address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238" },
  ];

  if (!props.crypticCoin) return null;

  // first four coins in specified order
  const selectedCoins = firstFourCoins.map((fc) =>
    props.crypticCoin.find((c) => c.symbol.toLowerCase() === fc.name.toLowerCase())
  ).filter(Boolean); // remove undefined values if any coin missing

  // remove specified coins
  const remainingCoins = props.crypticCoin.filter(
    (c) => !selectedCoins.some((sc) => sc.symbol.toLowerCase() === c.symbol.toLowerCase())
  );

  // random 5 coins
  const randomFive = remainingCoins.sort(() => 0.5 - Math.random());

  // final list in required order
  const finalCoins = [...selectedCoins, ...randomFive];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-gray-600 font-medium">Coin</th>
            <th className="px-6 py-3 text-left text-gray-600 font-medium">Price</th>
          </tr>
        </thead>
        <tbody>
          {finalCoins.map((c) => (
            <tr key={c.id} className="border-b">
              <td className="px-6 py-4 flex items-center gap-3">
                <img src={c.image} alt={c.name} className="w-6 h-6" />
                <Link to={`/coin/${c.symbol}`}>
                  <span className="font-medium ml-8">{c.name}</span>
                </Link>
              </td>
              <td className="px-6 py-4 font-medium">${c.current_price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinRanking;
