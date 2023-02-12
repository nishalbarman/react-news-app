import React, { Component } from "react";
import News from "./News";

export class NewsItem extends Component {
  render() {
    let { title, description, date, ImageUrl, NewsUrl } = this.props;
    return (
      <div>
        <div className="card my-4" style={{ width: "18rem" }}>
          <img
            src={ImageUrl}
            className="card-img-top"
            alt="..."
            style={{ width: "100%", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">{date}</small>
            </p>
            <a href={NewsUrl} target="_blank" className="btn btn-primary">
              Visit Page
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
