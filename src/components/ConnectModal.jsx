import React from "react";
import { Link } from "react-router-dom";

//photo
import xmark from "../assets/img/xmark.svg";

const ConnectModal = ({ setShowModal }) => {
  return (
    <>
      <div className="overlay z-50"></div>

      <div className="flex flex-col items-center justify-center">
        <div className="fixed top-40 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] p-4 md:p-6 md:pt-10 xl:p-10 rounded-xl h-auto bg-white z-50 mx-5 xl:top-10">
          <div className="py-1 md:py-2 text-mainBlack mb-1 md:mb-5 mt-5 flex items-center justify-between">
            <h3 className="font-semibold font-montserrat text-lg md:text-xl xl:text-2xl">
              Bog&apos;lanish uchun ma&apos;lumot
            </h3>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-4 opacity-30 transition-all duration-500 hover:opacity-100">
              <img
                src={xmark}
                alt="Exit icon"
                width={40}
                className="w-6 lg:w-10"
              />
            </button>
          </div>
          <div className="py-1 md:py-3 lg:py-5 text-mainBlack">
            <div className="space-y-1 mb-2 md:mb-5">
              <h4 className="font-medium font-montserrat text-textGrey text-sm md:text-base">
                Ish tartibi:
              </h4>
              <p className="text-sm md:text-base">
                Dushanba-Yakshanba: <strong>Kechayu-kunduz</strong>
              </p>
            </div>
            <div className="space-y-1 mb-2 md:mb-5">
              <h4 className="font-medium font-montserrat text-textGrey text-sm md:text-base">
                Raqamga qo&apos;ng&apos;iroq qiling:
              </h4>
              <a
                className="font-semibold text-lg md:text-xl font-montserrat"
                href="tel:+998900000000">
                +998 (90) 000 00 00
              </a>
              <div className="flex items-center space-x-1 md:space-x-2">
                <Link
                  to="/"
                  className="font-semibold underline text-sm md:text-base text-mainGrey hover:text-mainBlack transition-all duration-500">
                  WhatsApp
                </Link>
                <Link
                  to="https://t.me/thisisal1ev"
                  className="font-semibold underline text-sm md:text-base text-mainGrey hover:text-mainBlack transition-all duration-500">
                  Telegram
                </Link>
              </div>
            </div>
            <div className="space-y-1 mb-5">
              <h4 className="font-medium font-montserrat text-textGrey text-sm md:text-base">
                Xatlar va takliflar uchun:
              </h4>
              <Link
                to="mailto:aaalievvv1@gmail.com"
                className="font-semibold text-base md:text-lg text-lightGreen underline underline-offset-1 hover:no-underline">
                aaalievvv1@gmail.com
              </Link>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium font-montserrat text-mainGrey text-sm md:text-base">
                Biz quyidagi manzilda joylashganmiz:
              </h4>
              <address className="font-medium font-montserrat not-italic text-sm md:text-base">
                Andijon viloyati, Baliqchi tumani, Chinobod shaharchasi{" "}
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectModal;
