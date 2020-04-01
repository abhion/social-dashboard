import React from 'react';
import Post from './Post';
import axios from 'axios';

class PostContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            postList: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + localStorage.getItem("loggedInUserId"))
            .then(res => {
                console.log(res.data)
                this.setState({
                    postList: res.data
                })
            })
    }

    render() {
        const postsEl = this.state.postList.map(post => {
            return (
            <li key={post.id}>
                <Post post={post} />
            </li>
            )
        })

        return (
            <div>
                <ul>
                    {postsEl}

                </ul>
            </div>
        );
    }

}

export default PostContainer;