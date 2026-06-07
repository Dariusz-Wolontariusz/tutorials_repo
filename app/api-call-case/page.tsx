"use client";

import React from "react";
import { useEffect, useState } from "react";

type TaxPayers = {
  id: string;
  name: string;
  orgNumber: string;
  riskScore: number; // 0–100
  status: "pending" | "cleared" | "flagged";
};

async function getTaxPayers(): Promise<TaxPayers[]> {
  try {
    const response = await fetch("/taxPayers.json");
    if (!response.ok) {
      throw new Error("There was a problem fatching the data.");
    }

    const data: TaxPayers[] = await response.json();
    console.log(response);

    return data;
  } catch (error) {
    console.log("En error occured during loading the data", error);
  }
  return [];
}

const case1 = () => {
  const [payerList, setPayerList] = useState<TaxPayers[]>([]);
  const [treshold, setTreshold] = useState<number>(0);

  useEffect(() => {
    async function load() {
      const list = await getTaxPayers();
      setPayerList(list);
    }

    load();
  }, []);

  return (
    <div>
      <input
        type="range"
        min={0}
        max={100}
        value={treshold}
        onChange={(e) => setTreshold(+e.target.value)}
      />
      <span>{treshold}</span>
      <ol>
        {payerList
          .filter((user) => user.riskScore >= treshold)
          .map((user) => (
            <li key={user.id}>
              <p>{user.id}</p>
              <br />
              <p>{user.name}</p>
              <br />
              <p>{user.riskScore}</p>
              <br />
              <p>{user.status}</p>
              <br />
            </li>
          ))}
      </ol>
    </div>
  );
};

export default case1;
