import React from "react";
import style from "./blog.module.css";
import { data } from "../../data/data";
import { RouteComponentProps } from "react-router";

interface IBlogProps {}

type RouteParams = {
  slug: string;
};

interface Props
  extends RouteComponentProps<RouteParams>,
    React.Props<RouteParams> {}

class Blog extends React.Component<Props> {
  render() {
    const getSlug = () => {
      return this.props.match.params.slug;
    };

    return (
      <div className={style.blog}>
        {data.blogs
          .filter((blog) => blog.slug == this.props.match.params.slug)
          .map((filteredblog, index) => (
            <div>
              <h1 className={style.title}>{filteredblog.title}</h1>
              {filteredblog.content.map((c, i) => {
                return <p>{c}</p>;
              })}
            </div>
          ))}
      </div>
    );
  }
}

export default Blog;
