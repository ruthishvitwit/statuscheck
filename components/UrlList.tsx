"use client ";

import React, { useEffect } from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { getUrls } from "@/redux/urlSlice";
import { getStatus } from "@/redux/statusSlice";
import StatusList from "./StatusList";

const UrlList = ({ userData }: { userData: any }) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.url.data);
  useEffect(() => {
    dispatch(getUrls(userData));
  }, []);

  return (
    <div className=" w-full">
      <div>
        <table className="w-full">
          <thead>
            <tr className="w-full">
              <th>Address</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {user.map((urls) => (
              <tr>
                <td>{urls.address} </td>
                <td>
                  <StatusList urlData={urls.address} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UrlList;
