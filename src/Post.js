import React from 'react';

function Post(props) {
    
    console.log(props.post)
    return (
        <div>
            <h3>{props.post.title}</h3>
            <div>{props.post.body}</div>
        </div>
    );
}

export default Post;