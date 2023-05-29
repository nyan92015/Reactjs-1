import React, { useEffect, useState } from "react";

const Main = () => {
  const [threadsData, setThreadsData] = useState([]);

  useEffect(() => {
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=10",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setThreadsData(data);
      });
  }, []);

  const threads = threadsData.map((threadData) => (
    <li key={threadData.id}>{threadData.title}</li>
  ));

  return <ul>{threads}</ul>;
};

export default Main;
