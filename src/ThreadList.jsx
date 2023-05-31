import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ThreadList = ({ threadsData }) => {
  const threads = threadsData.map((threadData) => (
    <Link
      to={"/thread/" + threadData.id}
      key={threadData.id}
      className="thread"
    >
      {threadData.title}
    </Link>
  ));

  return (
    <div className="container-threadList">
      <h1>新着スレッド</h1>
      <ul className="threadList">{threads}</ul>
    </div>
  );
};

export default ThreadList;
