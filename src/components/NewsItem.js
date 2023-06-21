import React, { Component } from "react";


export default class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl, newsUrl} = this.props
        return (
          <>
          <h1></h1>
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