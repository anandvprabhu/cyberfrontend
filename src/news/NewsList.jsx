import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../news/newsItem.css';
import RegForm from './RegForm';
import { Link } from 'react-router-dom';

// require('dotenv').config({ path: '../../.env' })

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=cyber+news&apiKey=441cee269ba9433fae71d6420cc01c1b`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])

    const [showForm, setFormStatus] = useState(false);
    const viewData = () => setFormStatus(!showForm);

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">CCAS</a>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="#" onClick={viewData}><Link className='form_link' to="/form">Register complaint</Link></a>
                </li>
                <li class="nav-item" style={{marginRight:"3%"}}>
                <a class="nav-link" href="#">Track complaint</a>
                </li>
            </ul>
            </div>
        </div>
            </nav>
            <h1 className='news_heading'>Breaking News</h1>
            {articles.map(article => {
                return(
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}

export default NewsList