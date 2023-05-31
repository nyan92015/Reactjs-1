import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Thread = ({ threadsData }) => {
  const { thread_id } = useParams();
  const [commentsData, setCommentsData] = useState([]);
  const inputRef = useRef("");

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

  const postComment = () => {
    fetch(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${thread_id}/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: inputRef.current.value,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // コメント投稿後にfetchを実行
        getComments();
      })
      .catch((error) => {
        window.alert("コメントを投稿できませんでした。");
        console.error(error);
      });
  };

  const commentList = commentsData.map((commentData) => (
    <li>{commentData.post}</li>
  ));

  const threadTitle = threadsData
    .filter((threadData) => threadData.id === thread_id)
    .map((threadsData) => threadsData.title);

  return (
    <div>
      <Link to="/">スレッド一覧へ戻る</Link>
      <h1>{threadTitle}</h1>
      <ul>{commentList}</ul>
      <div className="newComment">
        <input type="text" ref={inputRef} placeholder="投稿しよう！！" />
        <button onClick={postComment}>投稿</button>
      </div>
    </div>
  );
};

export default Thread;
