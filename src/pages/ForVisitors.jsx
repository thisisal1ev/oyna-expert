import React from 'react'
import { Link } from 'react-router-dom'

//data
import { newsData } from '../data'

const ProductionWorkshops = () => {
  const filteredNews = newsData.filter((obj) => obj.uniqueName === `mehmonlar uchun`);

  return (
    <div className='py-9'>

      <div className="content-container">

        <h1 className='mb-6 font-extrabold text-22 sm:text-2xl md:3xl lg:text-4xl xl:text-5xl sm:mb-8 lg:mb-9 xl:mb-11'>Mehmonlar uchun</h1>

        <ul className='my-4 font-montserrat space-y-2 md:space-y-3'>
          {
            filteredNews.map((news) => {
              return (
                <li className='py-4 px-5 my-2 border rounded-md flex flex-col space-y-3' key={news.id}>
                  <time className='text-textGrey text-sm'>{news.dateOfPublication}</time>
                  <Link className='text-lightGreen underline text-xl md:text-22 hover:no-underline' to={`/yangiliklar/ishlab chiqarish/${news.title}`}>{news.title}</Link>
                  <div className='my-2'>
                    <Link className='inline-block float-left mr-5' to={news.path}>
                      <img width={120} height={80} src={news.img} alt={news.title} />
                    </Link>
                    <p>{news.excerptFromThePost}</p>
                  </div>
                  <p>{news.excerptFromThePost2}</p>
                </li>
              )
            })
          }
        </ul>

      </div>

    </div>
  )
}

export default ProductionWorkshops