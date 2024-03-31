import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const PageNotFound = () => {
  const location = useLocation();
  const gotoviy = location.pathname.split('/').filter(path => path !== '');

  return (
    <>
      <>
        <ul className="bread pt-10 w-full max-w-base mx-auto px-5 flex font-montserrat mb-5 sm:mb-6 lg:mb-8">
          <li>
            <Link className="inline-block text-lightGreen text-base p-1" to='/'><span>Home</span></Link>
          </li>
          {
            gotoviy.map((gotov, index) => {
              return (
                <li key={index}>
                  {
                    index !== gotoviy.length - 1 ? <Link to={gotov} className="inline-block text-lightGreen text-base p-1">{gotov}</Link> : <span className='inline-block text-mainGrey text-base p-1'>{gotov}</span>
                  }
                </li>
              )
            })
          }
        </ul>
      </>
    </>
  )
}

export default PageNotFound