import React from 'react'
import { Link } from 'react-router-dom'

//data
import { newsData } from '../data'

const News = () => {
  const [open, setOpen] = React.useState(false)

  const filteredObjects = newsData.filter(obj => obj.uniqueName === 'Ishlab chiqarish').splice(2);
  const filteredObjectss = newsData.filter(obj => obj.uniqueName === 'Mehmonlar uchun').splice(1);
  const filteredObjectsss = newsData.filter(obj => obj.uniqueName === 'Kompaniya yangiliklari').splice(2);

  return (
    <div className='py-9'>

      <div className="content-container">

        <h1 className='mb-6 pb-6 font-extrabold text-22 sm:text-2xl md:3xl lg:text-4xl xl:text-5xl sm:mb-8 lg:mb-9 xl:mb-11'>Yangiliklar</h1>

        <div className='font-montserrat relative sm:mb-8 lg:mb-9 xl:mb-11'>

          <button onClick={() => setOpen(true)} className='inline-flex items-center border border-skyblue rounded-sm py-2 px-6 transition-all duration-300 hover:border-white hover:news-btn-shadow relative'>

            <svg className='mr-3' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="#15c" fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>

            <span className='text-royaleBlue font-bold text-sm'>Bo&apos;limlar</span>

          </button>

          <div onClick={() => setOpen(false)} className={`absolute -top-4 left-0 bg-white news-btn-shadow ${open ? 'block' : 'hidden'}`}>
            <ul className='mb-6 mt-4 mr-10 ml-5 space-y-3'>
              <li className='ml-1'>
                <button onClick={() => setOpen(false)} className='inline-flex items-center rounded-sm py-2'>

                  <svg className='mr-3' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#15c" fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>

                  <span className='text-royaleBlue font-bold text-sm'>Bo&apos;limlar</span>

                </button>
              </li>
              {
                filteredObjects.map((news, index) => {
                  return (
                    <li className='ml-9' key={index}>
                      <Link to={`/yangiliklar/${news.uniqueName}`} className='font-bold hover:underline'>{news.uniqueName}</Link>
                    </li>
                  )
                })
              }
              {
                filteredObjectss.map((news, index) => {
                  return (
                    <li className='ml-9' key={index}>
                      <Link to={`/yangiliklar/${news.uniqueName}`} className='font-bold hover:underline'>{news.uniqueName}</Link>
                    </li>
                  )
                })
              }
              {
                filteredObjectsss.map((news, index) => {
                  return (
                    <li className='ml-9' key={index}>
                      <Link to={`/yangiliklar/${news.uniqueName}`} className='font-bold hover:underline'>{news.uniqueName}</Link>
                    </li>
                  )
                })
              }
            </ul>

          </div>

        </div>

        <ul className='my-4 font-montserrat space-y-2 md:space-y-3'>
          {
            newsData.map((newsItem) => {
              return (
                <li className='py-4 px-5 my-2 border rounded-md flex flex-col space-y-3' key={newsItem.id}>
                  <time className='text-textGrey text-sm'>{newsItem.dateOfPublication}</time>
                  <Link className='text-lightGreen underline text-xl md:text-22 hover:no-underline' to={`/yangiliklar/${newsItem.uniqueName}/${newsItem.title}`}>{newsItem.title}</Link>
                  <div className='my-2'>
                    <Link className='inline-block w-full md:w-auto md:float-left md:mr-5 mb-5' to={`/yangiliklar/${newsItem.uniqueName}/${newsItem.title}`}>
                      <img className='w-full' height={80} src={newsItem.img} alt={newsItem.title} />
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