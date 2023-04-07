import React from 'react'

const NewsItem = (props) => {
  return (
    <>
      <div className="card my-3">
        {/* <span className="badge text-bg-primary">{props.newsSource}</span> */}
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:1}}>
          {props.newsSource}
        </span>
        <img src={props.imageURL?props.imageURL:"https://www.hindustantimes.com/ht-img/img/2023/03/11/1600x900/breaking_news_1678579087121_1678579087315_1678579087315.jpeg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc?props.desc:"This might interest you"}...</p>
          <p className="blockquote-footer">
            By {props.author?props.author:"Anonymous"} on {new Date(props.date).toGMTString()}
          </p>
          <a href={props.siteURL} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </>
  )
}

export default NewsItem
