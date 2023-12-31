import React, { Component } from "react";
import Spinner from "./spinner/Spinner";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <>
        <div className="card my-3 " style={{ width: "18rem" }}>
          <img className="card-img-top" src={imageUrl} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ zIndex: 1, marginLeft: "-40px" }}
              >
                {source.name}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">
                `By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}`
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}
