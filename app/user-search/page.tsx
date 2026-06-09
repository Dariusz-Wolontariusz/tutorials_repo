"use client";

import React from "react";
import { useEffect, useState } from "react";

type Person = {
  id: number;
  name: string;
  email: string;
};

async function getUsers(): Promise<Person[]> {
  try {
    const response = await fetch("/mockData.json");

    if (response.ok) {
      const data = response.json();
      return data;
    }
    throw new Error("Something went wrong with fetching the data.");
  } catch (error) {
    console.log("error:", error);
  }
  return [];
}

const UserSearch = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [usersList, setUsersList] = useState<Person[]>([]);
  const [page, setPage] = useState<number>(1);
  const page_size = 50;

  useEffect(() => {
    const load = async () => {
      const data = await getUsers();
      setUsersList(data);

      return usersList;
    };

    load();
  }, []);

  const filteredList = usersList.filter((user) =>
    user.name.toLowerCase().includes(searchWord.toLowerCase()),
  );

  const startIndex = (page - 1) * page_size;
  const visible = filteredList.slice(startIndex, startIndex + page_size);
  const handlePrev = () => setPage(page - 1);
  const handleNext = () => setPage(page + 1);
  const totalPages = Math.ceil(filteredList.length / page_size);
  const pageArr = new Array(totalPages);
  console.log(pageArr);

  return (
    <div>
      <h1>User Search</h1>
      <label htmlFor="searchField">Search User</label>
      <input
        id="searchField"
        type="text"
        placeholder="Search user"
        onChange={(e) => {
          setSearchWord(e.target.value);
          setPage(1);
        }}
        value={searchWord}
      />
      {filteredList && (
        <div>
          <p>Found {filteredList.length} matches</p>
          <p>
            You are on page {page} of {totalPages}
          </p>
          <button onClick={handlePrev} disabled={page === 1}>
            Prev
          </button>
          {filteredList.map((record, idx) => (
            <div key={idx}></div>
          ))}
          <button
            onClick={handleNext}
            disabled={page === Math.ceil(filteredList.length / page_size)}
          >
            Next
          </button>
        </div>
      )}
      <ul>
        {visible &&
          visible.map((user) => (
            <li key={user.id}>
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.email}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserSearch;
