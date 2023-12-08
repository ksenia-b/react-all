// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setAllPosts(response.data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Posts</h1>
      <Posts posts={currentPosts} loading={isLoading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={allPosts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;