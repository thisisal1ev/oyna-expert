import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuizModal from "./QuizModal";

//photos
import window1 from "../assets/img/window-1.jpg";
import window2 from "../assets/img/window-2.jpg";
import window3 from "../assets/img/window-3.jpg";

const Home = () => {
  const data = [
    {
      id: "1",
      tabTitle: "Thermo",
      img: window1,
      tabContentTitle: "Bir panjarali oyna",
      tabContent: "Hajmi: 800 x 1420 mm(kenglik x balandlik)",
      tabPrice: "6 450",
      img2: window2,
      tabContentTitle2: "Ikki panjarali oyna",
      tabContent2: "Hajmi: 1,470 x 1,420 mm(kenglik x balandlik)",
      tabPrice2: "8 950",
      img3: window3,
      tabContentTitle3: "Uch panjarali oyna",
      tabContent3: "Hajmi: 1,470 x 1,420 mm(kenglik x balandlik)",
      tabPrice3: "10 250",
    },
    {
      id: "2",
      tabTitle: "Grazio",
      img: window1,
      tabContentTitle: "Bir panjarali oyna",
      tabContent: "Hajmi: 800 x 1420 mm(kenglik x balandlik)",
      tabPrice: "6 950",
      img2: window2,
      tabContentTitle2: "Ikki panjarali oyna",
      tabContent2: "Hajmi: 1,470 x 1,420 mm(kenglik x balandlik)",
      tabPrice2: "9 450",
      img3: window3,
      tabContentTitle3: "Uch panjarali oyna",
      tabContent3: "Hajmi: 1,470 x 1,420 mm(kenglik x balandlik)",
      tabPrice3: "11 250",
    },
    {
      id: "3",
      tabTitle: "Delight",
      img: window1,
      tabContentTitle: "Bir panjarali oyna",
      tabContent: "Hajmi: 800 x 1420 mm(kenglik x balandlik)",
      tabPrice: "7 200",
      img2: window2,
      tabContentTitle2: "Ikki panjarali oyna",
      tabContent2: "Hajmi: 1,470 x 1,420 mm(kenglik x balandlik)",
      tabPrice2: "9 100",
      img3: window3,
      tabContentTitle3: "Uch panjarali oyna",
      tabContent3: "Hajmi: 1,470 x 1,420 mm(kenglik x balandlik)",
      tabPrice3: "12 000",
    },
  ];

  const [activeTab, setActiveTab] = useState(data[0].id);
  const [showContactModal, setShowContactModal] = useState(false);

  const closeModal = (e) => {
    if (e.target.classList.contains("overlay")) setShowContactModal(false);
    if (e.key === "Escape") setShowContactModal(false);
  };

  return (
    <div className="py-9" onClick={closeModal} onKeyDown={closeModal}>
      <div className="w-full max-w-base mx-auto px-5">
        <div className="mb-6">
          <h2 className="mb-3 text-22 sm:text-2xl md:text-30 lg:text-4xl xl:text-44 font-extrabold">
            Standart o&apos;lchamdagi derazalar uchun narxlar
          </h2>

          <h3 className="text-sm font-medium font-montserrat text-textGrey sm:text-base">
            Ishlab chiqarish muddati faqat 5 kun
          </h3>
        </div>

        <ul className="flex items-center space-x-2 mb-5">
          {data.map((tab) => {
            return (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-4 rounded-lg text-base font-bold transition-all duration-300 ease-linear cursor-pointer ${activeTab === tab.id
                  ? "bg-orange text-white border-2 border-white"
                  : "bg-white  border-2 hover:opacity-70"
                  }`}>
                {tab.tabTitle}
              </li>
            );
          })}
        </ul>

        <ul>
          {data.map((tab) => {
            return (
              <li
                key={tab.id}
                className={`grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-4 ${activeTab === tab.id ? "bg-white" : "hidden"
                  }`}>
                {/* 1 */}
                <div>
                  <img
                    className="object-contain h-52 mb-5 lg:h-96"
                    src={tab.img}
                    alt={tab.tabContentTitle}
                  />
                  <Link
                    to={`/plastik oynalar/${tab.tabContentTitle}`}
                    className="inline-block mb-6">
                    <h4 className="mb-2 text-22 font-bold md:text-2xl lg:text-28">
                      {tab.tabContentTitle}
                    </h4>
                    <p className="font-medium text-base">{tab.tabContent}</p>
                  </Link>
                  <p className="mb-6 font-semibold text-28 font-montserrat">
                    {tab.tabPrice}&nbsp;
                    <span className="inline-block text-textGrey text-lg font-medium">
                      so&apos;mdan
                    </span>
                  </p>
                  <div>
                    <button
                      onClick={() => setShowContactModal(true)}
                      className="inline-block px-10 py-5 bg-lightGreen border-2 border-lightGreen rounded-md text-base text-white font-bold transition-all duration-300 hover:bg-white hover:text-mainBlack outline-none">
                      So&apos;rov qoldish
                    </button>
                  </div>
                </div>

                {/* 2 */}
                <div>
                  <img
                    className="object-contain h-52 mb-5 lg:h-96"
                    src={tab.img2}
                    alt={tab.tabContentTitle2}
                  />
                  <Link
                    to={`/plastik oynalar/${tab.tabContentTitle2}`}
                    className="inline-block mb-6">
                    <h4 className="mb-2 text-22 font-bold md:text-2xl lg:text-28">
                      {tab.tabContentTitle2}
                    </h4>
                    <p className="font-medium text-base  whitespace-nowrap">
                      {tab.tabContent2}
                    </p>
                  </Link>
                  <p className="mb-6 font-semibold text-28 font-montserrat">
                    {tab.tabPrice2}&nbsp;
                    <span className="inline-block text-textGrey text-lg font-medium">
                      so&apos;mdan
                    </span>
                  </p>
                  <div>
                    <button
                      onClick={() => setShowContactModal(true)}
                      className="inline-block px-10 py-5 bg-lightGreen border-2 border-lightGreen rounded-md text-base text-white font-bold transition-all duration-300 hover:bg-white hover:text-mainBlack outline-none">
                      So&apos;rov qoldish
                    </button>
                  </div>
                </div>

                {/* 3 */}
                <div>
                  <img
                    className="object-contain h-52 mb-5 lg:h-96"
                    src={tab.img3}
                    alt={tab.tabContentTitle3}
                  />
                  <Link
                    to={`/plastik oynalar/${tab.tabContentTitle3}`}
                    className="inline-block mb-6">
                    <h4 className="mb-2 text-22 font-bold md:text-2xl lg:text-28">
                      {tab.tabContentTitle3}
                    </h4>
                    <p className="font-medium text-base whitespace-nowrap">
                      {tab.tabContent3}
                    </p>
                  </Link>
                  <p className="mb-6 font-semibold text-28 font-montserrat">
                    {tab.tabPrice3}&nbsp;
                    <span className="inline-block text-textGrey text-lg font-medium">
                      so&apos;mdan
                    </span>
                  </p>
                  <div>
                    <button
                      onClick={() => setShowContactModal(true)}
                      className="inline-block px-10 py-5 bg-lightGreen border-2 border-lightGreen rounded-md text-base text-white font-bold transition-all duration-300 hover:bg-white hover:text-mainBlack outline-none">
                      So&apos;rov qoldish
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {showContactModal && <QuizModal setShowContactModal={setShowContactModal} />}
    </div>
  );
};

export default Home;
