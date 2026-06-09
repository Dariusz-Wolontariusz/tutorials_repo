"use client";

import React from "react";
import { useState, useEffect } from "react";

type TaxPayer = {
  id: string;
  name: string;
  orgNumber: string;
  riskScore: number;
  status: "pending" | "cleared" | "flagged";
};

async function getTaxPayers(): Promise<TaxPayer[]> {
  try {
    const response = await fetch("/taxPayers.json");

    if (!response.ok) {
      throw new Error("Something wenth wrong while fetching");
    }
    const data: TaxPayer[] = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }

  return [];
}

const SearchBox = () => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<TaxPayer[]>([]);

  useEffect(() => {
    let active: boolean = true;
    const searchName = async (search: string) => {
      const data = await getTaxPayers();
      if (!data) {
        return;
      }
      const filteredData = data.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase()),
      );
      if (active) {
        setResults(filteredData);
        console.log("filtered data:", filteredData);
        return;
      }
    };

    if (search === "") {
      setResults([]);
      return;
    }
    const debouncedSearch = setTimeout(() => {
      searchName(search);
    }, 400);

    return () => {
      active = false;
      clearTimeout(debouncedSearch);
    };
  }, [search]);

  return (
    <>
      <div>
        <h1>SearchBox</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <ol>
          {results &&
            results.map((user) => (
              <li key={user.id}>
                <p>{user.name}</p>
                <p>{user.riskScore}</p>
                <p>{user.status}</p>
              </li>
            ))}
        </ol>
      </div>
    </>
  );
};

export default SearchBox;
