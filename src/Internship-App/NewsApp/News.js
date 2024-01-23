import React, { useState, useEffect } from 'react';
import './NewsApp.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const NewsApp = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [fromDate, setFromDate] = useState(new Date());
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // Fetch news on initial load
        fetchNews("India", getDefaultFromDate(), currentPage);

    }, []); // Empty dependency array ensures the effect runs only once on mount

    function getDefaultFromDate() {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 7);
        return currentDate;
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function fetchNews(searchQuery, fromDate, page, sortBy) {
        const apiKey = 'b117751327744dbe99c23225706ce0a4'; // Replace with your actual API key
        const apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&from=${formatDate(fromDate)}&sortBy=${sortBy || 'popularity'}&apiKey=${apiKey}&page=${page}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const newsContainer = document.getElementById("newsContainer");

                if (data.articles.length === 0) {
                    alert(`No results found for "${searchQuery}" on date "${fromDate}"`);
                } else {
                    const newsItems = data.articles.slice(0, 15);
                    newsContainer.innerHTML = "";
                    newsItems.forEach((item, index) => {
                        const cardDiv = document.createElement("div");
                        cardDiv.className = "col-md-4";
                        cardDiv.innerHTML = `
              <div class="card mb-3" style="max-width: 25rem;">
                <h3 class="card-header">${item.title}</h3>
                <div class="card-body">
                  <h5 class="card-title">${item.source.name}</h5>
                </div>
                <img src="${item.urlToImage}" class="card-img-top" alt="News Image">
                <div class="card-body">
                  <p class="card-text">${item.description}</p>
                </div>
                <div class="card-body">
                  <a href="${item.url}" class="card-link" target="_blank">Detailed news</a>
                </div>
                <div class="card-footer text-muted">${item.publishedAt}</div>
              </div>
            `;
                        newsContainer.appendChild(cardDiv);
                    });
                }
            })
            .catch(error => console.error("Error fetching news:", error));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchQuery = searchQuery.trim() || "India";
        setCurrentPage(1);
        fetchNews(searchQuery, fromDate, currentPage);
    };

    const handleNextPage = () => {
        const searchQuery = searchQuery.trim() || "India";
        setCurrentPage(currentPage + 1);
        fetchNews(searchQuery, fromDate, currentPage);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                {/* ... (unchanged) */}
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={handleSubmit}>
                            <input
                                className="form-control me-sm-2"
                                type="search"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-secondary  me-sm-2" type="submit">Search</button>
                            <DatePicker
                                selected={fromDate}
                                onChange={(date) => setFromDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className="form-control me-sm-2"
                                placeholderText="Select date"
                            />
                        </form>
                    </div>
                </div>
            </nav>
            <br />
            <div className="container">
                <div className="row" id="newsContainer">
                    {/* News items will be displayed here */}
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <button className="btn btn-primary" onClick={handleNextPage} style={{ marginBottom: "15px" }}>
                            Next Page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsApp;
