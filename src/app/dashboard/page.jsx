"use client";

import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        cache: "no-store",
      });

      if (!res.ok) {
        setErr(true);
      }

      const resData = await res.json();

      setLoading(false);
      setData(resData);
    };

    getData();
  }, []);

  console.log("Data...", data);

  return <div>Dashboard</div>;
};

export default Dashboard;
