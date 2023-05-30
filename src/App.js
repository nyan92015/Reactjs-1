import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ThreadList from "./ThreadList";
import NewThread from "./NewThread";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<ThreadList />} />
        <Route exact path="/thread/new" element={<NewThread />} />
      </Routes>
    </>
  );
}

export default App;
