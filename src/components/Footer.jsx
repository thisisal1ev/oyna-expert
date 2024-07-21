import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//photes
import mirBank from "../assets/img/mirbank.svg";
import alfaBank from "../assets/img/alfa-bank.svg";
import sberBank from "../assets/img/sberbank.svg";
import qiwiKoshelok from "../assets/img/qiwikoshelok.svg";
import yooMoney from "../assets/img/yumoney.svg";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 0,
      once: true,
      easing: "ease-in-out",
      anchorPlacement: "bottom",
    });
  }, []);

  const date = new Date().getFullYear()

  return (
    <footer className="bg-grey border-t">
      <div className="py-8 lg:py-[4%]">
        <div className="w-full mx-auto max-w-base px-5 flex flex-col items-center sm:block">
          <h2 className="mb-3 font-bold text-center sm:text-left text-22 sm:text-4xl">
            Bog&apos;lanish uchun ma&apos;lumot
          </h2>
          <p className="font-montserrat text-center sm:text-left font-medium text-textGrey mb-5 text-sm sm:text-base">
            Siz uchun qulay usulda biz bilan bog&apos;laning
          </p>
        </div>

        <div className="flex flex-col items-center text-center w-full mx-auto max-w-base px-5 lg:space-x-2 sm:items-start sm:text-left lg:flex-row lg:items-center justify-between mb-5">
          <div className="space-y-5 mb-5 lg:mb-0">
            <div className="space-y-2">
              <h4 className="font-medium font-montserrat text-mainGrey">
                Ish kunlari:
              </h4>
              <p className="font-medium font-montserrat ">
                Dushanba-Juma: 9:00 dan 17:00 gacha
              </p>
              <p className="font-medium font-montserrat ">
                Shanba: 11:00 dan 15:00 gacha
              </p>
            </div>
            <div>
              <div className="space-y-2">
                <h4 className="font-medium font-montserrat text-mainGrey">
                  Biz quyidagi manzilda joylashganmiz:
                </h4>
                <address className="font-medium font-montserrat not-italic">
                  Andijon viloyati, Baliqchi tumani, Chinobod shaharchasi{" "}
                </address>
              </div>
            </div>
          </div>

          <div className="space-y-5 mb-5 lg:mb-0">
            <div className="space-y-2">
              <h4 className="font-medium font-montserrat text-mainGrey">
                Qong&apos;roq qilish:
              </h4>
              <a
                href="tel:+998900000000"
                className="font-semibold whitespace-nowrap text-2xl font-montserrat">
                {"+998 (90) 000 00 00"}
              </a>
              <div className="flex items-center justify-center sm:justify-normal space-x-2">
                <a
                  href="#"
                  className="font-semibold text-mainGrey hover:text-mainBlack transition-all duration-500">
                  WhatsApp
                </a>
                <a
                  href="https://t.me/thisisal1ev"
                  target="_blank"
                  className="font-semibold text-mainGrey hover:text-mainBlack transition-all duration-500">
                  Telegram
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium font-montserrat text-mainGrey">
                Xat va takliflar uchun:
              </h4>
              <a
                href="mailto:aaalievvv1@gmail.com"
                target="_blank"
                className="font-semibold text-lg text-lightGreen underline underline-offset-1 hover:no-underline">
                aaalievvv1@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <h4 className="font-medium font-montserrat text-mainGrey">
                Ijtimoiy tarmoqlarga obuna bo&apos;ling:
              </h4>
              <div className="flex items-center justify-center space-x-3 sm:justify-normal">
                <a
                  href="#"
                  className="opacity-50 hover:opacity-100 transition-all duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 100 100"
                    data-prefix="itqrqc1c6">
                    <path fill="none" d="M0 0h100v100H0z"></path>
                    <path
                      d="M50.66 73.591a23.931 23.931 0 0 1-11.76-3.074l-13.649 4.4 4.524-13.441A24.078 24.078 0 1 1 50.66 73.591zm0-44.317a20.191 20.191 0 0 0-18.535 28.057 28.549 28.549 0 0 0 1.975 3.541l-2.69 8.089 8.1-2.642a20.261 20.261 0 0 0 3.28 1.7 20.166 20.166 0 1 0 7.87-38.745zm-.744 28.9a22.174 22.174 0 0 1-4.016-3.027.011.011 0 0 1-.014-.009h-.011v-.013a22.066 22.066 0 0 1-3.525-3.6c-5.475-6.654-2.937-10.855-2.211-11.684.837-.966 3.558-1.3 3.614-.818s2.847 5.63 2.9 6.1-1.47 2.228-1.916 2.74 3.5 4.418 3.566 4.482c.082.065 4.472 3.465 4.911 2.966s1.969-2.253 2.444-2.266 5.947 2.087 6.423 2.074.515 2.737-.333 3.706c-.715.836-4.533 3.92-11.832-.647z"
                      fillRule="evenodd"
                      className="path-ill8i3hbj"></path>
                  </svg>
                </a>
                <a
                  href="https://t.me/thisisal1ev"
                  target="_blank"
                  className="opacity-50 hover:opacity-100 transition-all duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 100 100"
                    data-prefix="imzx9c4er">
                    <path
                      data-name="Rectangle 1 copy 15"
                      fill="none"
                      d="M0 0h100v100H0z"></path>
                    <path
                      d="M71.45 28.908L26.63 45.895c-2.45.709-2.38 3.132-.56 3.715l11.23 3.509 4.29 13.187c.53 1.443.95 1.987 1.85 2 .93.013 1.29-.33 2.27-1.192 1.14-1.072 2.87-2.758 5.62-5.429l11.68 8.639c2.15 1.187 3.7.572 4.23-2l7.33-36.262c.78-3.149-1.07-4.089-3.12-3.154zM39.06 52.313l25.53-16.035c1.26-.844 1.65.1 1.09.749l-21.19 19.08-1.09 9.523z"
                      fillRule="evenodd"
                      className="path-iy9p6hrzo"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="opacity-50 hover:opacity-100 transition-all duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 100 100"
                    data-prefix="iuntjzuiw">
                    <path
                      data-name="Rectangle 1 copy 12"
                      fill="none"
                      d="M0 0h100v100H0z"></path>
                    <path
                      d="M49.22 64.024h2.98a2.531 2.531 0 0 0 1.37-.6 2.223 2.223 0 0 0 .41-1.315s-.06-4.016 1.8-4.608c1.84-.583 4.19 3.882 6.69 5.6a4.725 4.725 0 0 0 3.32 1.014l6.68-.093s3.49-.216 1.84-2.966c-.14-.225-.97-2.035-4.97-5.754-4.19-3.892-3.62-3.262 1.42-10 3.07-4.1 4.3-6.6 3.92-7.675-.37-1.021-2.63-.752-2.63-.752l-7.52.047a1.7 1.7 0 0 0-.97.171 2.124 2.124 0 0 0-.66.808 43.441 43.441 0 0 1-2.78 5.871c-3.35 5.693-4.69 5.995-5.23 5.641-1.28-.825-.96-3.31-.96-5.076 0-5.518.84-7.819-1.63-8.414a12.768 12.768 0 0 0-3.51-.35c-2.68-.027-4.95.008-6.23.64-.86.419-1.52 1.354-1.12 1.408a3.372 3.372 0 0 1 2.22 1.117 7.317 7.317 0 0 1 .75 3.407s.44 6.5-1.04 7.3c-1.01.553-2.4-.576-5.39-5.742a47.522 47.522 0 0 1-2.68-5.57 2.206 2.206 0 0 0-.62-.839 3.1 3.1 0 0 0-1.16-.467l-7.14.047a2.452 2.452 0 0 0-1.47.5 1.553 1.553 0 0 0-.02 1.274s5.59 13.106 11.92 19.711c5.81 6.056 12.41 5.659 12.41 5.659z"
                      fillRule="evenodd"
                      className="path-iumb9mg2o"></path>
                  </svg>
                </a>
              </div>
              <p className="font-medium font-montserrat text-mainGrey leading-6 w-full lg:max-w-[420px]">
                Saytdagi barcha materiallar, jumladan, mualliflik huquqi va
                turdosh huquqlar qonun hujjatlariga muvofiq himoyalangan
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 border-b border-t">
        <div className="w-full mx-auto max-w-base px-5">
          <h4 className="mb-2 font-medium text-sm text-center font-montserrat text-textGrey sm:text-left">
            Qulay to&apos;lov:
          </h4>
          <div className="flex items-start justify-center sm:justify-normal">
            <div className="flex items-center py-2 space-x-5 mb-3">
              <a
                href="#"
                className="grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  className="w-[60px] h-8"
                  width={60}
                  height={32}
                  src={sberBank}
                  alt="icon"
                />
              </a>
              <a
                href="#"
                className="grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  className="w-[60px] h-8"
                  width={60}
                  height={32}
                  src={mirBank}
                  alt="icon"
                />
              </a>
              <a
                href="#"
                className="grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  className="w-[60px] h-8"
                  width={60}
                  height={32}
                  src={alfaBank}
                  alt="icon"
                />
              </a>
              <a
                href="#"
                className="grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  className="w-[60px] h-8"
                  width={60}
                  height={32}
                  src={qiwiKoshelok}
                  alt="icon"
                />
              </a>
              <a
                href="#"
                className="grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  className="w-[60px] h-8"
                  width={60}
                  height={32}
                  src={yooMoney}
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="w-full mx-auto max-w-base px-5">
          <div className="w-full max-w-base mx-auto px-5 flex items-center flex-col justify-between sm:flex-row">
            <p className="font-medium font-montserrat text-sm mr-3 mb-2 sm:mb-0">
              Copyright © {date} Kompaniya nomi
            </p>
            <p className="font-medium font-montserrat text-sm">
              Qo&apos;llab-quvvatlash.&nbsp;
              <a
                href="https://t.me/thisisal1ev"
                target="_blank"
                className="underline">
                thisisa1ev veb-saytlarni ishlab chiqish.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
