import React, { useEffect, useState } from 'react'

export default function FetchExample(){
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(r => r.json())
      .then(data => { if(mounted) setPost(data) })
      .catch(() => { if(mounted) setPost(null) })
      .finally(() => { if(mounted) setLoading(false) })
    return () => { mounted = false }
  }, [])

  if(loading) return <p>Loading...</p>
  if(!post) return <p>Failed to load.</p>

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}
