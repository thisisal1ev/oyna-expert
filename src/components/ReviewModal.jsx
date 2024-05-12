import React from "react";

//photo
import xmark from "../assets/img/xmark.svg";

const ReviewModal = ({ setReviewModal }) => {

  return (
    <>
      <div className="overlay z-50"></div>

      <div className="flex flex-col items-center justify-center">
        <div className="fixed top-40 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] p-4 md:px-5  rounded-xl h-auto bg-white z-50 xl:top-10">
          <div className="py-2 text-mainBlack mb-2 md:mb-5 mt-5 md:mt-10 flex flex-col">
            <h3 className="font-extrabold text-lg md:text-xl lg:text-2xl font-raleway">
              Sharx qoldirish
            </h3>
            <button
              onClick={() => setReviewModal(false)}
              className="absolute top-5 right-4 opacity-30 transition-all duration-500 hover:opacity-100">
              <img
                src={xmark}
                alt="Exit icon"
                width={40}
                className="w-6 md:w-10"
              />
            </button>
          </div>

          <div className="py-1 md:py-3 text-mainBlack">

            <form
              onSubmit={() => alert("Sharx uchun rahmat")}
              name="modal-question"
              className="w-full flex flex-col space-y-4 lg:space-y-6">
              <label className="flex flex-col space-y-2 font-bold">
                Ismingiz:
                <input
                  className="border p-2 outline-none rounded-md text-mainBlack font-normal focus:border-royaleBlue focus:shadow-lg shadow-royaleBlue font-montserrat hover:border-royaleBlue hover:shadow-lg"
                  type="text"
                  placeholder="Ismingiz"
                  required
                />
              </label>

              <label className="flex flex-col space-y-2 font-bold">
                Telefon raqamingiz:
                <input
                  className="border p-2 outline-none rounded-md text-mainBlack font-normal focus:border-royaleBlue focus:shadow-lg shadow-royaleBlue font-montserrat hover:border-royaleBlue hover:shadow-lg"
                  type="tel"
                  placeholder="+998 90 000 00 00"
                  pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}"
                  required
                />
              </label>

              <label className="flex flex-col space-y-2 font-bold">
                Sharx matnni:
                <textarea
                  className="border p-2 outline-none rounded-md text-mainBlack font-normal focus:border-royaleBlue focus:shadow-lg shadow-royaleBlue font-montserrat hover:border-royaleBlue hover:shadow-lg resize-none"
                  name="review"
                  cols="10"
                  rows="3"
                  required></textarea>
              </label>

              <div className="my-1 sm:my-2 flex items-center justify-between pb-4">
                <div className="inline-flex items-center">
                  <div className="relative flex items-center p-3 rounded-full cursor-pointer mr-2 lg:mr-5">
                    <input
                      id="ripple-on"
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-textGrey before:opacity-0 before:transition-opacity checked:border-royaleBlue checked:bg-royaleBlue checked:before:bg-royaleBlue hover:before:opacity-10"
                      required
                    />

                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <label
                  className="font-normal text-mainBlack text-sm md:text-base hover:text-royaleBlue transition-all duration-300"
                  htmlFor="ripple-on">
                  <a
                    className="underline text-royaleBlue"
                    target="_blank"
                    href="#">
                    Shaxsiy ma&apos;lumotlarimni
                  </a>{" "}
                  qayta ishlash shartlarini qabul qilaman
                </label>
              </div>

              <button
                type="submit"
                className="max-w-44 text-center font-montserrat py-2 px-5 md:px-7 text-sm bg-royaleBlue border-2 border-royaleBlue font-medium rounded-md text-white hover:opacity-70 transition-all duration-300">
                Sharx qoldirish
              </button>
            </form>

          </div>

        </div>

      </div>

    </>
  );
};

export default ReviewModal;
