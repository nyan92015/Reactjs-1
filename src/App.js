import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ThreadList from "./ThreadList";
import NewThread from "./NewThread";
import Thread from "./Thread";
import { useEffect, useState } from "react";

function App() {
  const [threadsData, setThreadsData] = useState([]);

  const getThreads = () => {
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
  };

  useEffect(() => {
    // 初回レンダリング時にfetchを実行
    getThreads();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<ThreadList threadsData={threadsData} />}
        />
        <Route
          exact
          path="/thread/:thread_id"
          element={<Thread threadsData={threadsData} />}
        />
        <Route
          exact
          path="/thread/new"
          element={<NewThread getThreads={getThreads} />}
        />
      </Routes>
    </>
  );
}

export default App;
