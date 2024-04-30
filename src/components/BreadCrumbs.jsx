import { Link, useLocation } from "react-router-dom";

const PageNotFound = () => {
  const location = useLocation();
  const gotoviy = location.pathname.split("/").filter((path) => path !== "");
  const path = gotoviy.map((path) => path.replace(/%20/g, " "));
  const isNewsPath = location.pathname.startsWith("/yangiliklar/");

  return (
    <>
    
      <ul className="bread w-full max-w-base mx-auto px-5 whitespace-nowrap font-montserrat text-sm flex flex-wrap items-center pt-8 mb-2 sm:text-base sm:mb-4 lg:mb-5">
        
        <li>
          <Link className="inline-block text-lightGreen" to="/">
            <span>Bosh sahifa</span>
          </Link>
        </li>

        {path.map((path, index) => {
          return (
            <li className="capitalize" key={index}>
              {index !== gotoviy.length - 1 ? (
                <Link
                  to={`${
                    isNewsPath && index === 1 ? "/yangiliklar" : ""
                  }/${path}`}
                  className="inline-block text-lightGreen">
                  {path}
                </Link>
              ) : (
                <span className="inline-block text-mainGrey">{path}</span>
              )}
            </li>
          );
        })}
      </ul>
      
    </>
  );
};

export default PageNotFound;
