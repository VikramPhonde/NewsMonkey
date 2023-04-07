import React from 'react'
import NewsItem from './NewsItem'
import { useState,useEffect } from 'react';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

  

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${page}&pageSize=${props.pageSize}`;
    //const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }


  useEffect(() => {
    fetchNews();
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${page+1}&pageSize=${props.pageSize}`;
    //const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }


  return (
    <>
      
        <h2 className="text-center my-3">News Monkey</h2>
        {loading&&<Loading/>}
        <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Loading />}>
          
          <div className='container'>
            <div className="row">
              {articles.map((element, index) => {
                return <div className='col-md-4' key={index}>
                  <NewsItem title={element.title} desc={element.description} imageURL={element.urlToImage} siteURL={element.url}
                         author={element.author} date={element.publishedAt} newsSource={element.source.name} />
                </div>
              })}
            </div>
          </div>

        </InfiniteScroll>
      
    </>
  )
}

export default News
