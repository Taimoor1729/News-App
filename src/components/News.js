import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner/Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articale: [],
      page: 1,
      totalResult: 0,
      loading: true
    };
  }

  // handlePagination = () => {
  // const  {totalResult, articale} = this.state
  //   const result = Math.ceil(totalResult/20)
  //   this.state({
  //     page: result
  //   })
  // }

  handlePrevious = () => {
    console.log("preoius butoon is clicked");
    // this.handlePagination()
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
    const { page, articale, totalResult } = this.state;
    const hasData = articale && articale.length > 0;
    console.log("hasData", hasData);
  
    if (page + 1 > Math.ceil(totalResult / 20)) {
      return null
    }
    
    else{
      this.setState(
        {
          page: page + 1
        },
        () => {
          // this.handlePagination(); // Move handlePagination call inside setState callback
          this.fetchNews();
        }
      );
    }
  };
  


  fetchNews  () {
    this.setState({
      loading: true
     })
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=72c2a7e215ee43c38e3672f783a1c87b&page=${this.state.page}&pageSize=20`;
     fetch(url)
     
    .then ( async response =>  await response.json())
    .then (async data =>  
      {
        this.setState({
          articale: data.articles,
          totalResult: data.totalResults,
          loading: false
        })
      }
      ) 
    .catch(err => console.log(err))
  }

  async componentDidMount() {
    await this.fetchNews()
  }



  render() {
    console.log(this.state.articale);
    console.log("this.state.totalResult", this.state.totalResult);
    return (
      <div className="text-center  my-3">
      {this.state.loading ? <div class="text-center spinner-border" role="status">
  {/* <span class="sr-only">Loading...</span> */}
</div> :
      <div className="container ">
       
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
            disabled= {this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevious}
          >
            &larr; previous
          </button>
          <button
            type="button"
            disabled ={this.state.page + 1 > Math.ceil(this.state.totalResult / 20)}
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            next &rarr;
          </button>
        </div>
      </div>
  }
      </div>
    );
  }
}



