import React, {useState, useEffect} from 'react'

const ApiFetch = () => {
  const [posts, setPosts] = useState([])
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  const meth = 'GET'

  useEffect(() => {
    fetch(apiUrl, {method: meth})
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
    
  }, [])
  return (
    <div>
      <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>
    </div>
  )
}

export default ApiFetch
