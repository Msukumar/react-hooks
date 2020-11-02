import React, { Component } from 'react'
import axios from 'axios';

export default class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            this.setState(presState=>{
               return {posts : res.data}
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render() {
        const {  posts } = this.state
        return (
            <div>
                List of post {
                    posts.length ? posts.map(post => {
                        return <span key={post.id}> {post.title} </span>
                    }) : 'No Posts'
                }
            </div>
        )
    }
}
