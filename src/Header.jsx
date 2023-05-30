import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h2>掲示板</h2>
      <Link to="/thread/new" className="buildThread">
        スレッドを立てる
      </Link>
    </header>
  );
};

export default Header;
