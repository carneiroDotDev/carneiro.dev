import React from 'react'
import { getBlogPosts } from '../utils'
import { notFound } from 'next/navigation'

function Page({ params }: {params: { category: string}}) {
    const posts = getBlogPosts().filter((post) => post.metaData.category === params.category)

    if(!posts){
        notFound()
    }
  return (
    <div>{params.category}</div>
  )
}

export default Page