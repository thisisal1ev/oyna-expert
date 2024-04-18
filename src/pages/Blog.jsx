import React, { useEffect, useState } from 'react'

//data
import { blogData } from '../data'
import { Link } from 'react-router-dom';

const Blog = () => {
  // State for pagination
  const [first, setFirst] = useState(1);
  const [last, setLast] = useState(4);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true);

  // Update pagination button states
  useEffect(() => {
    setIsPrevActive(first > 1);
    setIsNextActive(last * first < blogData.length);
  }, [first, last]);

  // Handle click on previous button
  const handlePreviousClick = () => {
    setFirst(first - 1);
  };

  // Handle click on next button
  const handleNextClick = () => {
    setFirst(first + 1);
  };

  // Calculate indices for slicing history data
  const lastIndex = first * last;
  const firstIndex = lastIndex - last;
  const blogs = blogData.slice(firstIndex, lastIndex);


  const scrollToTop = () => {
    window.scrollTo({
      top: 250,
      behavior: 'smooth'
    });
  };

  return (
    <div className='py-9'>

      <div className="content-container">

        <h1 className='mb-6 pb-6 font-extrabold text-22 sm:text-2xl md:3xl lg:text-4xl xl:text-5xl sm:mb-8 lg:mb-9 xl:mb-11'>Blog</h1>


        <ul onChange={scrollToTop()} className='my-4 mb-12 font-montserrat space-y-2 md:space-y-3'>
          {
            blogs.map((blog) => {
              return (
                <li className='py-4 px-5 my-2 border rounded-md flex flex-col space-y-3 lg:space-y-4' key={blog.id}>
                  <time className='text-textGrey text-sm'>{blog.dateOfPublication}</time>
                  <Link className='text-lightGreen underline text-xl md:text-22 hover:no-underline' to={`/blog/${blog.title}`}>{blog.title}</Link>
                  <div className='my-2'>
                    <Link className='inline-block w-full md:w-auto md:float-left md:mr-5 mb-5 sm:mb-0' to={`/blog/${blog.title}`}>
                      <img className='w-full' height={100} src={blog.img} alt={blog.title} />
                    </Link>
                    <p>{blog.shortAboutTheNews}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>

        {/* Pagination */}
        <nav
          role="navigation"
          aria-label="pagination"
          className="flex"
        >
          <ul className="flex flex-row items-center">
            {/* Previous button */}
            <li>
              <button
                onClick={handlePreviousClick}
                className={`inline-flex items-center leading-none duration-300 transition-all ease-in-out border rounded-md h-10 py-2 px-3 justify-center ${isPrevActive
                  ? "active:text-royaleBlue active:border-royaleBlue hover:text-royaleBlue hover:border-royaleBlue"
                  : "hidden"
                  }`}
                aria-label="Go to previous page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m4 12l-.354-.354l-.353.354l.353.354zm15 .5a.5.5 0 0 0 0-1zM9.646 5.646l-6 6l.708.708l6-6zm-6 6.708l6 6l.708-.708l-6-6zM4 12.5h15v-1H4z" />
                </svg>
              </button>
            </li>
            <li className={`flex items-center space-x-2 ${isNextActive ? 'mr-5' : 'ml-5'}`}>
              {/* Pages */}
              <button onClick={isNextActive ? '' : handlePreviousClick} className={`border py-1 px-4 rounded-md h-10 text-sm transition-all duration-300 active:text-royaleBlue active:border-royaleBlue hover:text-royaleBlue hover:border-royaleBlue ${isNextActive ? 'bg-royaleBlue text-white border-royaleBlue hover:opacity-70 hover:text-white' : ''}`}>1</button>
              <button onClick={isPrevActive ? '' : handleNextClick} className={`border py-1 px-4 rounded-md h-10 text-sm transition-all duration-300 active:text-royaleBlue active:border-royaleBlue hover:text-royaleBlue hover:border-royaleBlue ${isPrevActive ? 'bg-royaleBlue text-white border-royaleBlue hover:opacity-70 hover:text-white' : ''}`}>2</button>
            </li>
            {/* Next button */}
            <li>
              <button
                onClick={handleNextClick}
                className={`inline-flex items-center duration-300 transition-all ease-in-out border rounded-md h-10 text-sm py-2 px-3 space-x-3 justify-center ${isNextActive
                  ? "active:text-royaleBlue active:border-royaleBlue hover:text-royaleBlue hover:border-royaleBlue"
                  : "hidden"
                  }`}
                aria-label="Go to next page"
              >
                <span>Keying sahifa</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m20 12l.354-.354l.353.354l-.353.354zm-15 .5a.5.5 0 0 1 0-1zm9.354-6.854l6 6l-.708.708l-6-6zm6 6.708l-6 6l-.708-.708l6-6zM20 12.5H5v-1h15z" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>

      </div>

    </div >
  )
}

export default Blog