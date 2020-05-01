import React from "react";
import { Link } from "react-router-dom";
import style from "./blogs.module.css";
import { data } from "../../data/data";

interface IBlogsProps {}

export const Blogs: React.FC<IBlogsProps> = (props): JSX.Element => {
  return (
    <div className={style.blogs}>
      {data.blogs
        .filter((b) => b.published)
        .map((blog, index) => (
          <div className={style.blog}>
            <Link to={"/blog/" + blog.slug}>
              <div className={style.card}>
                <div className={style.header}>{blog.title}</div>
                <div className={style.inner}>{blog.summary}</div>
                <div
                  className={[
                    style.footer,
                    style.date,
                    style.justifiyCenter,
                  ].join(" ")}
                >
                  {blog.date.toDateString()}
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};
