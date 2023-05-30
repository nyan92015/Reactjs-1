import React, { useRef } from "react";
import { Link } from "react-router-dom";

const NewThread = () => {
  const inputRef = useRef("");
  function PostThread() {
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // リクエストヘッダーにJSONデータを指定
        },
        body: JSON.stringify({
          title: inputRef.current.value,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // リクエストが成功した場合の処理
        console.log(data);
      })
      .catch((error) => {
        // リクエストが失敗した場合の処理
        console.error(error);
      });
  }
  return (
    <div className="container-newThread">
      <Link to="/">スレッド一覧へ戻る</Link>
      <div className="newThread">
        <h2>スレッド新規作成</h2>
        <input type="text" ref={inputRef} placeholder="新規スレッド" />
        <button onClick={PostThread}>作成</button>
      </div>
    </div>
  );
};

export default NewThread;
