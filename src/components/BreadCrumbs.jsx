import { Link, useLocation } from 'react-router-dom';

const PageNotFound = () => {
  const location = useLocation();
  const gotoviy = location.pathname.split('/').filter(path => path !== '');
  const path = gotoviy.map(path => path.replace(/%20/g, " "));

  return (
    <>
      <ul className="bread pt-8 w-full max-w-base mx-auto px-5 flex font-montserrat mb-2 sm:mb-4 lg:mb-5">
        <li>
          <Link className="inline-block text-lightGreen text-base p-1" to='/'><span>Bosh sahifa</span></Link>
        </li>
        {
          path.map((gotov, index) => {
            return (
              <li className='capitalize' key={index}>
                {
                  index !== gotoviy.length - 1 ? <Link to={gotov} className="inline-block text-lightGreen text-base p-1">{gotov}</Link> : <span className='inline-block text-mainGrey text-base p-1'>{gotov}</span>
                }
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default PageNotFound