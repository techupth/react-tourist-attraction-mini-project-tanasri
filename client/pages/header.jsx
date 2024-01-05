import { useContext, useState } from "react";
import { KeywordContext } from "../src/App";
export default function Header() {
  const search = useContext(KeywordContext);
  return (
    <div className="header">
      <h1 className="title">เที่ยวที่ไหนดี </h1>
      <label className="search-label" htmlFor="search-box">
        ค้นหาเกี่ยวกับ
      </label>
      <input
        type="text"
        placeholder="หาที่เที่ยวแล้วไปกัน .. "
        className="search-box"
        id="search-box"
        value={search.keyword}
        onChange={(e) => search.setKeyword(e.target.value)}
      ></input>
      <hr></hr>
    </div>
  );
}
