import React, { useRef } from "react";

const NewComment = ({ thread_id, getComments }) => {
  const inputRef = useRef("");

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

  return (
    <div className="container-newComment">
      <input type="text" ref={inputRef} placeholder="投稿しよう！！" />
      <button onClick={postComment}>投稿</button>
    </div>
  );
};

export default NewComment;
