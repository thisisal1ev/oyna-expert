import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { newsData } from '../data';

const NewsSections = () => {
  const { uniqueName } = useParams();

  const detailNews = newsData.filter((section) => section.uniqueName === uniqueName);

  return (
    <div className='py-9'>
      <div className="content-container">
        <h1 className='mb-6 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-44 sm:mb-8 lg:mb-9 xl:mb-11'>
          {uniqueName}
        </h1>

        <ul className='my-4 font-montserrat space-y-2 md:space-y-3'>
          {
            detailNews.map((news) => {
              return (
                <li className='py-4 px-5 my-2 border rounded-md flex flex-col space-y-3' key={news.id}>
                  <time className='text-textGrey text-sm'>{news.dateOfPublication}</time>
                  <Link className='text-lightGreen underline text-xl md:text-22 hover:no-underline' to={`/yangiliklar/${news.uniqueName}/${news.title}`}>{news.title}</Link>
                  <div className='my-2'>
                    <Link className='inline-block w-full md:w-auto md:float-left md:mr-5 mb-5' to={`/yangiliklar/${news.uniqueName}/${news.title}`}>
                      <img className='w-full' height={80} src={news.img} alt={news.title} />
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
  );
};

export default NewsSections;
