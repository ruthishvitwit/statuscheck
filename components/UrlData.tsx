// Import necessary modules and components
"use client";
import React from "react";
import UrlList from "./UrlList";
import styles from "./UrlData.module.css";

interface Chain {
  name: string;
  chainid: string;
}

const UrlData: React.FC = () => {
  const chains = [
    "cosmoshub" , "agoric", "akash", "juno", "osmosis","passage","dydx","stargaze",
  ];

  return (
    <div className={styles.data}>
      <h1 className={styles.heading}>Url Data :</h1>
      <div className={styles.center}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Chain Name</th>
              <th>Urls List</th>
            </tr>
          </thead>
          <tbody>
            {chains.map((cdata) => (
              <tr key={cdata}>
                <td>{cdata}</td>
                <td>
                  <UrlList userData={cdata} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UrlData;
