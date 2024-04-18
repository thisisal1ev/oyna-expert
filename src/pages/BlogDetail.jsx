import React from 'react'
import { useParams } from 'react-router-dom';

//data
import { blogData } from '../data'

const NewsDetail = () => {
  const { title } = useParams();
  const detailBlog = blogData.find((blog) => {
    return blog.title === title
  })

  return (
    <div className='py-9'>

      <div className="content-container">

        <h1 className='mb-6 font-extrabold text-xl sm:text-22 md:text-3xl lg:text-4xl xl:text-44 sm:mb-8 lg:mb-9 xl:mb-11'>{detailBlog.title}</h1>

        <div className='my-4 mb-12 font-montserrat text-textGrey space-y-4'>
          <p className='text-sm'>Nashr qilingan sana:&nbsp;<time className='inline-block'>{detailBlog.dateOfPublication}</time></p>
          <p>{detailBlog.conText}</p>
          <p>{detailBlog.text}</p>
        </div>

      </div>

    </div>
  )
}

export default NewsDetail