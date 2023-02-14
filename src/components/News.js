import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
    super(props);

    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    } - NewsMonkey`;

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      query: "",
    };
  }

  initNews = async () => {
    this.setState({ loading: true, page: this.state.page + 1 });
    let API;
    if (this.props.query !== "") {
      API = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.token}&page=${this.state.page}&pageSize=${this.props.pageSize}&q=${this.props.query}`;
    } else {
      API = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.token}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    }
    let data = await fetch(API);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
      page: this.state.page,
    });
  };

  componentDidMount() {
    this.initNews();
  }

  componentDidUpdate() {
    console.log("update");
  }

  fetchData = async () => {
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
    let API;
    if (this.props.query !== "") {
      API = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.token}&page=${this.state.page}&pageSize=${this.props.pageSize}&q=${this.props.query}`;
    } else {
      API = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.token}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    }
    let data = await fetch(API);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults,
      page: this.state.page,
    });
  };

  // handleNextClick = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
  //     alert("End of News");
  //   } else {
  //     this.setState({ page: this.state.page + 1 });
  //     this.updateNews();
  //   }
  // };
  // handlePrevClick = async () => {
  //   if (this.state.page <= 1) {
  //     alert("No Option To Back");
  //   } else {
  //     this.setState({ page: this.state.page - 1 });
  //     this.updateNews();
  //   }
  // };

  render() {
    return (
      <>
        {/* my-4 */}
        <div className="container" style={{ marginTop: "1.5rem" }}>
          <h2>{`${this.props.headline},  Category : ${
            this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)
          }`}</h2>
        </div>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}>
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
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
                        (element.author
                          ? "By " + element.author
                          : "By Unknown") +
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
                      Source={element.source.name}
                      category={this.props.category}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* {!this.state.loading && (
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
        )} */}
      </>
    );
  }
}

export default News;
