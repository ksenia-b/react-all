import React from "react";

const Posts = ({posts, loading}) => {
    if(loading){
        return <h2>...loading</h2>
    }
    return (
       <ul className="mb-4 p-5" >
        {
        posts.map(post => (
            <li className="block text-gray-700 text-sm text-left p-2" id={post.id}>{post.title}</li>
        ))}
       </ul>
    )
}

export default Posts;