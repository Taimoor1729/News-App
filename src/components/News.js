import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articale: [],
      page: 1,
    };
  }

  handlePrevious = () => {
    console.log("preoius butoon is clicked");
    const { page, articale} = this.state;
    if (page > 1) {
      this.setState(
        {
          page: page - 1
        },
        () => {
          this.fetchNews();
        }
      );
    }
  };
  
  handleNext = () => {
    console.log("next button is clicked");
    const { page, articale } = this.state;
    const hasData = articale && articale.length > 0
    console.log("hasData",hasData)
    if(hasData){
    this.setState(
      {
        page: page + 1
      },
      () => {
        this.fetchNews();
      }
    );}
  };
  


  fetchNews  () {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=72c2a7e215ee43c38e3672f783a1c87b&page=${this.state.page}`;
     fetch(url)
    .then ( async response =>  await response.json())
    .then (async data =>  { return await this.setState({
        articale: data.articles
    })})
    .catch(err => console.log(err))
  }

  async componentDidMount() {
    await this.fetchNews()
  }



  render() {
    console.log(this.state.articale);
    console.log(this.state.page);
    return (
      <div className="container my-3">
        <div className="row md-3">
          {this.state.articale?.map((item, index) => (
            <div className="col" key={index}>
              <NewsItem
                title={
                  item.title == null
                    ? "Not title"
                    : item.title.length < 40
                    ? item.title
                    : `${item.title.slice(0, 40)} ...`
                }
                description={
                  item.description == null
                    ? "Not title"
                    : item.description.length > 100
                    ? `${item.description.slice(0, 100)} ...`
                    : item.description
                }
                imageUrl={item.urlToImage}
                newsUrl={item.url}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevious}
          >
            &larr; previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            next &rarr;
          </button>
        </div>
      </div>
    );
  }
}



