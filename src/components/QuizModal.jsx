import React, { useState } from "react";

//photo
import xmark from "../assets/img/xmark.svg";

const QuizModal = ({ setShowContactModal }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="overlay z-50"></div>
      <div className="flex flex-col items-center justify-center">
        <div className="fixed top-40 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] p-4 md:p-6 md:pt-10 xl:p-10 rounded-xl bg-white z-50 xl:top-10">
          <div className="py-2 text-mainBlack mb-2 md:mb-5 mt-5 md:mt-10 flex flex-col">
            <h3 className="font-extrabold text-lg md:text-xl lg:text-2xl font-raleway text-center">
              Savollaringiz qoldimi?
            </h3>
            <h4 className="font-extrabold text-lg md:text-xl lg:text-2xl font-raleway text-center">
              So&apos;rov qoldiring
            </h4>
            <p className="text-sm text-textGrey mt-2 font-medium text-center">
              va bizning mutaxassislarimiz imkon qadar tezroq siz bilan
              bog&apos;lanadi
            </p>
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-5 right-4 opacity-30 transition-all duration-500 hover:opacity-100">
              <img
                src={xmark}
                alt="Exit icon"
                width={40}
                className="w-6 md:w-10"
              />
            </button>
          </div>
          <div className="py-1 md:py-3 lg:py-5 text-mainBlack">
            <form
              name="modal-question"
              onSubmit={(e) => {
                e.preventDefault(),
                  setChecked(false),
                  checked && alert("Xat ketti"),
                  checked && setShowContactModal(false),
                  !checked &&
                  alert("Iltimos bizning siyosatimiz qabul qiling!");
              }}
              className="w-full flex flex-col">
              <input
                className="bg-transparent py-2 md:py-4 text-sm md:text-base font-montserrat outline-none border-b-2 my-2 hover:placeholder:text-lightGreen placeholder:text-mainBlack focus:border-mainBlack"
                placeholder="Ismingiz"
                type="text"
                required
              />
              <input
                id="changeContent"
                className="bg-transparent py-2 md:py-4 text-sm md:text-base font-montserrat outline-none border-b-2 my-2 placeholder:text-mainBlack focus:border-mainBlack"
                placeholder="Telefon raqamingiz"
                pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}"
                type="tel"
                required
              />
              <div className="my-1 sm:my-2 flex items-center justify-between pb-4">
                <div className="inline-flex items-center">
                  <div className="relative flex items-center p-3 rounded-full cursor-pointer mr-2 lg:mr-5">
                    <input
                      onChange={() => setChecked(true)}
                      id="ripple-on"
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-textGrey before:opacity-0 before:transition-opacity checked:border-lightGreen checked:bg-lightGreen checked:before:bg-lightGreen hover:before:opacity-10"
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
                  className="font-medium text-textGrey text-sm md:text-base"
                  htmlFor="ripple-on">
                  Men shaxsiy ma&apos;lumotlarni qayta ishlash va{" "}
                  <a className="underline" target="_blank" href="#">
                    maxfiylik siyosatiga roziman.
                  </a>
                </label>
              </div>
              <button
                type="submit"
                onSubmit={() => alert("Xat ketti")}
                className="py-2 px-5 md:py-4 md:px-7 lg:py-7 lg:px-9 text-sm md:text-base bg-lightGreen border-2 border-lightGreen w-full font-bold font-raleway overflow-hidden rounded-md text-white active:hover:bg-white active:text-mainBlack lg:hover:bg-white lg:hover:text-mainBlack transition-all duration-500">
                So&apos;rov qoldirish
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizModal;
