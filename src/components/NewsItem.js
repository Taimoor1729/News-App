import React, { Component } from "react";
import Spinner from "./spinner/Spinner";

export default class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl, newsUrl} = this.props
        return (
          <>
          <Spinner />
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
            <div className="card my-3 " style={{width : "18rem"}}>
              <img className="card-img-top" src={imageUrl} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                 {description}
                </p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary" >
                  Go somewhere
                </a>
              </div>
            </div>
          </>
        );
    }
}