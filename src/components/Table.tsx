import React from "react";

type Props = {
  title: string;
  data: {
    action: string;
    amountEth: string;
    amountGho: string;
    assetChain: string;
    txHash: string;
  }[];
};

const Table = ({ title, data }: Props) => {
  return (
    <div className="flex flex-col w-full gap-6 ">
      <p className="text-[32px]">{title}</p>
      <table className="rounded-3xl bg-white">
        <thead className="text-[#989898]">
          <tr>
            <th>ACTION</th>
            <th>AMOUNT ETH</th>
            <th>AMOUNT GHO</th>
            <th>ASSET CHAIN</th>
            <th>TX HASH</th>
          </tr>
        </thead>
        <br />
        <tbody>
          {data.map((item) => (
            <tr className="text-center" key={item.txHash}>
              <td>{item.action}</td>
              <td>{item.amountEth}</td>
              <td>{item.amountGho}</td>
              <td>{item.assetChain}</td>
              <td>{item.txHash}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
