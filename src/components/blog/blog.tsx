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

    const getSources = (filteredblog: any): JSX.Element => {
      return filteredblog.sources.map((source: any, i: number) => {
        return (
          <div>
            <div className={style.source}>
              <div>{source.title}</div>
              <a target='_BLANK' href={source.link}>
                {source.link}
              </a>
            </div>
          </div>
        );
      });
    };

    return (
      <div className={style.blog}>
        {data.blogs
          .filter((blog) => blog.slug == this.props.match.params.slug)
          .map((filteredblog, index) => (
            <div>
              <div className={[style.flex, style.between].join(" ")}>
                <div className={style.title}>{filteredblog.title}</div>
                <div>{filteredblog.date.toDateString()}</div>
              </div>

              {filteredblog.content.map((c, i) => {
                return <p>{c}</p>;
              })}

              {filteredblog.sources.length ? (
                <div>{getSources(filteredblog)}</div>
              ) : null}
            </div>
          ))}
      </div>
    );
  }
}

export default Blog;
