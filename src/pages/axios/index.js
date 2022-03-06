import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function Index() {
    const [posts, setPosts] = useState([])
    const url = "https://jsonplaceholder.typicode.com/posts"
  
    useEffect(()=>{
      axios.get(url)
      .then(res=> setPosts(res.data))
      .catch(err => console.log(err))
    },[])

    return (
      <div>
          { posts.map(item=><h6>{item.title}</h6>)}
      </div>
    )
}
