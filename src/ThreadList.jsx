import React, { useEffect, useState } from "react";

const ThreadList = () => {
  const [threadsData, setThreadsData] = useState([]);

  useEffect(() => {
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setThreadsData(data);
      })
      .catch((error) => {
        console.log(error);
        window.alert("スレッドを読み込めませんでした。");
      });
  }, []);

  const threads = threadsData.map((threadData) => (
    <li key={threadData.id} className="thread">
      {threadData.title}
    </li>
  ));

  return (
    <div className="container-threadList">
      <h1>新着スレッド</h1>
      <ul className="threadList">{threads}</ul>
    </div>
  );
};

export default ThreadList;
