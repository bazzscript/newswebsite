import axios from "axios"
import { useState, useEffect } from "react"
import { NewsItem } from "./NewsItem"

export const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([])

    // useEffect(() => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setArticles(data.articles)
    //         })
    // }, [category])

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
                    params: {
                        country: 'us',
                        category: category,
                        apiKey: import.meta.env.VITE_API_KEY
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setArticles(response.data.articles);
            } catch (error) {
                console.error("Error fetching the news articles:", error);
            }
        };

        fetchArticles();
    }, [category]);

    return (
        <>
            <h2 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h2>

            {/* {articles.map((news, index) => (
                <NewsItem key={index} title={news.title} description={news.description} imageUrl={news.urlToImage} newsUrl={news.url} />
            ))} */}
            <div className="container">
                <div className="row justify-content-center">
                    {articles.map((news, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <NewsItem
                                title={news.title}
                                description={news.description}
                                imageUrl={news.urlToImage}
                                newsUrl={news.url}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
