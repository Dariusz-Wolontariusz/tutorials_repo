"use client";

import React from "react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

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
  const pageArr = Array.from({ length: totalPages }, (value, idx) => idx + 1);
  console.log("pageArr", pageArr);
  const windowStart = Math.max(page - 1, 1);
  const windowEnd = windowStart + 2;

  return (
    <div className={styles.mainContainer}>
      <h1>User Search</h1>
      <label htmlFor="searchField">Search User</label>
      <input
        id="searchField"
        className={styles.inputField}
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
          <div className={styles.controllBtnContainer}>
            <button
              className={styles.controllBtn}
              onClick={handlePrev}
              disabled={page === 1}
            >
              Prev
            </button>
            <button
              className={styles.controllBtn}
              onClick={handleNext}
              disabled={page === Math.ceil(filteredList.length / page_size)}
            >
              Next
            </button>
          </div>
          <div className={styles.pageBtnContainer}>
            <button
              className={`${styles.pageBtn} ${page === 1 ? styles.active : ""}`}
              onClick={() => setPage(1)}
            >
              1
            </button>
            {windowStart > 2 && <span>...</span>}

            {pageArr &&
              pageArr
                .filter(
                  (num) =>
                    num >= windowStart &&
                    num <= windowEnd &&
                    num !== 1 &&
                    num !== totalPages,
                )
                .map((pageNumber) => (
                  <div key={pageNumber}>
                    <button
                      className={`${styles.pageBtn} ${page === pageNumber ? styles.active : ""}`}
                      onClick={() => setPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  </div>
                ))}
            {windowEnd < totalPages - 1 && <span>...</span>}
            <button
              className={`${styles.pageBtn} ${page === pageArr.at(-1) ? styles.active : ""}`}
              onClick={() => setPage(pageArr.at(-1) ?? 1)}
            >
              {pageArr.at(-1)}
            </button>
          </div>
        </div>
      )}
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email address</th>
            </tr>
          </thead>
          <tbody>
            {visible &&
              visible.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserSearch;
