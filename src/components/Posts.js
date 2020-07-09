import React from 'react';
import Post from './Post';

export default ({ posts }) => {
    if(!posts){
        return <p className="text-center">no posts</p>
    }
    return (
        posts.map(post => <Post post={post} key={post} />)
    )
}