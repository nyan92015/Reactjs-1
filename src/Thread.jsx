import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NewComment from "./NewComment";

const Thread = ({ threadsData }) => {
  const { thread_id } = useParams();
  const [commentsData, setCommentsData] = useState([]);

  const getComments = () => {
    fetch(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${thread_id}/posts`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCommentsData(data.posts);
      })
      .catch((error) => {
        console.log(error);
        window.alert("スレッドを読み込めませんでした。");
      });
  };

  useEffect(() => {
    // 初回レンダリング時にfetchを実行
    getComments();
  }, []);

  const commentList = commentsData.map((commentData) => (
    <li>{commentData.post}</li>
  ));

  const threadTitle = threadsData.filter(
    (threadData) => threadData.id === thread_id
  )[0].title;

  return (
    <div className="container-thread">
      <Link to="/">スレッド一覧へ戻る</Link>
      <h1>{threadTitle}</h1>
      <ul className="container-commentList">{commentList}</ul>
      <NewComment thread_id={thread_id} getComments={getComments} />
    </div>
  );
};

export default Thread;
