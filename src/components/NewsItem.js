import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, date, ImageUrl, NewsUrl, Source } = this.props;
    
    return (
      <div>
        <div className="card my-4" style={{ width: "18rem" }}>
          <span
            className={`position-absolute top-0 translate-middle badge rounded-pill bg-${
              this.props.category === "general"
                ? "warning"
                : this.props.category === "health"
                ? "danger"
                : "info"
            }`}
            style={{ left: "85%", zIndex: "1" }}>
            {Source}
          </span>
          <img src={ImageUrl} className="card-img-top" alt="News banner" style={{ width: "100%", height: "200px" }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">{date}</small>
            </p>
            <a rel="noreferrer" href={NewsUrl} target="_blank" className="btn btn-primary">Visit Page</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
