import React from "react";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav className="p-5">
            <ul className="flex">
                {pageNumbers.map(number => (
                    <li className="mr-6" key={number} >
                        <a className="text-blue-500" onClick={() => paginate(number)}  href="!#" >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;