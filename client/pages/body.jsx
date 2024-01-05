import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";

export const pageContext = React.createContext();

export default function Body() {
  const [location, setLocation] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async function () {
    try {
      const result = await axios.get("http://localhost:4001/trips?keywords=");
      console.log(result.data.data);
      setLocation(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="list">
      {location.map((e) => (
        <div key={e.eid} className="list-box">
          <div className="big-img">
            <img src={e.photos[0]} className="preview-Img" />{" "}
          </div>

          <div className="detail">
            <a href={e.url} className="list-title">
              {e.title}
            </a>

            <p className="description">
              {e.description.slice(null, 100)}
              <a className="readmore" href={e.url}>
                ...อ่านต่อ
              </a>
            </p>

            <div className="tag-box">
              <p className="tag">หมวด</p>
              <li className="tag-list">
                {e.tags.map((list) => (
                  <ul>{list}</ul>
                ))}
              </li>
            </div>

            <div className="small-pic-box">
              {e.photos.map((photo, i) =>
                i > 0 && i <= 3 ? (
                  <img src={photo} className="small-pic" />
                ) : null
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
