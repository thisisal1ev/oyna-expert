import React from 'react'
import { useParams } from 'react-router-dom';

//data
import { newsData } from '../data'

const NewsDetail = () => {
  const { title } = useParams();
  const detailNews = newsData.find((news) => {
    return news.title === title
  })

  return (
    <div className='py-9'>

      <div className="content-container">

        <h1 className='mb-6 font-extrabold text-xl sm:text-22 md:text-3xl lg:text-4xl xl:text-44 sm:mb-8 lg:mb-9 xl:mb-11'>{detailNews.title}</h1>

        <div className='my-4 font-montserrat text-textGrey space-y-4'>
          <p className='text-sm'>Nashr qilingan sana:&nbsp;<time className='inline-block'>{detailNews.dateOfPublication}</time></p>
          <p>{detailNews.shortAboutTheNews}</p>
          <p>{detailNews.conText}</p>
          <p>{detailNews.text}</p>
          <h3 className='italic'><strong>{detailNews.sectionTitle}</strong></h3>
          <p>{detailNews.mainText}</p>
        </div>

      </div>

    </div>
  )
}

export default NewsDetail