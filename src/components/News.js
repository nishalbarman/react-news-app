import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello, I am a constructor from News Component");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    console.log("Component Did Mount");
    let API = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.token}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(API);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      page: 1,
      totalResults: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      alert("End of News");
    } else {
      this.setState({ loading: true });
      let API = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=${this.props.token}&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(API);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        loading: false,
        page: this.state.page + 1,
        totalResults: parsedData.totalResults,
      });
    }
  };
  handlePrevClick = async () => {
    if (this.state.page <= 1) {
      alert("No Option To Back");
    } else {
      this.setState({ loading: true });
      let API = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=${this.props.token}&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(API);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        loading: false,
        page: this.state.page - 1,
        totalResults: parsedData.totalResults,
      });
    }
  };

  render() {
    return (
      <div className="container my-4">
        <h2>{this.props.headline + ",  Category : " + this.props.category}</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div
                  className="col md-3"
                  key={
                    element.url
                      ? element.url
                      : "https://www.hindustantimes.com/ht-img/img/2023/02/12/1600x900/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1676160882990_1676160882990.jpeg"
                  }>
                  <NewsItem
                    title={
                      element.title
                        ? element.title.slice(0, 80) + " ..."
                        : "Title is not available for this news"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 150) + " ..."
                        : "Description is not available for this news"
                    }
                    date={
                      (element.author ? "By " + element.author : "By Unknown") +
                      " on " +
                      (element.publishedAt
                        ? new Date(element.publishedAt).toUTCString()
                        : "00:00:00")
                    }
                    ImageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.hindustantimes.com/ht-img/img/2023/02/12/1600x900/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1676160882990_1676160882990.jpeg"
                    }
                    NewsUrl={element.url ? element.url : ""}
                  />
                </div>
              );
            })}
        </div>
        {!this.state.loading && (
          <div className="container d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
              disabled={this.state.page <= 1}>
              &larr; Prev Page
            </button>
            <button
              type="button"
              className="btn btn-dark mx-3"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
              }>
              Next Page &rarr;
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default News;
