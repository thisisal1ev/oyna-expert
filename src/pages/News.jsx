import React from 'react'
import { Link } from 'react-router-dom'

//data
import { newsData } from '../data'

const News = () => {
  const filteredObjects = newsData.filter(obj => obj.uniqueName === 'Ishlab chiqarish').splice(2);
  const filteredObjectss = newsData.filter(obj => obj.uniqueName === 'Mehmonlar uchun').splice(1);
  const filteredObjectsss = newsData.filter(obj => obj.uniqueName === 'Kompaniya yangiliklari').splice(2);

  return (
    <div className='py-9'>

      <div className="content-container">

        <h1 className='mb-6 font-extrabold text-22 sm:text-2xl md:3xl lg:text-4xl xl:text-5xl sm:mb-8 lg:mb-9 xl:mb-11'>Yangiliklar</h1>

        <div>
          {
            filteredObjects.map((news, index) => {
              return (
                <Link key={index} to={`/yangiliklar/${news.uniqueName}`} className='link'>{news.uniqueName}</Link>
              )
            })
          }
          {
            filteredObjectss.map((news, index) => {
              return (
                <Link key={index} to={`/yangiliklar/${news.uniqueName}`} className='link'>{news.uniqueName}</Link>
              )
            })
          }
          {
            filteredObjectsss.map((news, index) => {
              return (
                <Link key={index} to={`/yangiliklar/${news.uniqueName}`} className='link'>{news.uniqueName}</Link>
              )
            })
          }
        </div>

        <ul className='my-4 font-montserrat space-y-2 md:space-y-3'>
          {
            newsData.map((newsItem) => {
              return (
                <li className='py-4 px-5 my-2 border rounded-md flex flex-col space-y-3' key={newsItem.id}>
                  <time className='text-textGrey text-sm'>{newsItem.dateOfPublication}</time>
                  <Link className='text-lightGreen underline text-xl md:text-22 hover:no-underline' to={`/yangiliklar/${newsItem.uniqueName}/${newsItem.title}`}>{newsItem.title}</Link>
                  <div className='my-2'>
                    <Link className='inline-block float-left mr-5' to={newsItem.path}>
                      <img width={120} height={80} src={newsItem.img} alt={newsItem.title} />
                    </Link>
                    <p>{newsItem.excerptFromThePost}</p>
                  </div>
                  <p>{newsItem.excerptFromThePost2}</p>
                </li>
              )
            })
          }
        </ul>

      </div>

    </div>
  )
}

export default News